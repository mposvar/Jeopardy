import Component from '@glimmer/component';
import { sort } from '@ember/object/computed';
import { A as EmberArray } from '@ember/array';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const maxPriceRows = 5;
const maxCategoryRows = 6;

export default class BoardBuilderComponent extends Component {
    
    //configuration
    // board = null;
    // onAddCategory = null;
    // onAddPrice = null;

    @tracked sortProperties = ['amount'];
    @tracked highlightedIndex = null;
    @tracked editingAnswer = null;
    @sort('args.board.prices', 'sortProperties') sortedPrices;

    get remainingPrices() {
        let differenceEstimate = 100;
        let lastPrice = 0;

        if (this.sortedPrices.length) {
            lastPrice = this.sortedPrices.lastObject.amount;
            const firstPrice = this.sortedPrices.length > 1 
                ? this.sortedPrices.objectAt(this.sortedPrices.length - 2).amount
                : 0;
            differenceEstimate = lastPrice - firstPrice;
        }

        let output = EmberArray();
        let currentPrice = lastPrice;
        for (let i = this.sortedPrices.length; i < maxPriceRows; i++) {
            currentPrice += differenceEstimate;
            output.addObject({ amount: currentPrice, isRequired: i < 2, categoryIndex: i });
        }

        return output;
    }

    get remainingCategories() {

        let output = EmberArray();
        for (let i = this.args.board.categories.length; i < maxCategoryRows; i++) {
            output.addObject({ isRequired: i < 2, index: i });
        }

        return output;
    }

    @action setHighlight(index) {
        this.highlightedIndex = index;
    }

    @action setEditingAnswer(answer) {
        this.editingAnswer = answer;
    }

    @action saveAnswer(answer) {
        return answer.save().then(() => {
            this.editingAnswer = null;
        });
    }

    @action setAnswerText(answer, event) {
        set(answer, 'answerText', event.target.value);
    }

    @action setQuestionText(answer, event) {
        set(answer, 'questionText', event.target.value);
    }
    
}
