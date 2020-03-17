import Component from '@ember/component';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';
import { A as EmberArray } from '@ember/array';
import { action } from '@ember/object';

const maxPriceRows = 5;
const maxCategoryRows = 6;

export default class extends Component {
    classNames = ['board-builder-component'];
    
    //configuration
    board = null;
    onAddCategory = null;
    onAddPrice = null;

    _sortProperties = ['amount'];
    @sort('board.prices', '_sortProperties')
    _sortedPrices;

    @computed('_sortedPrices.@each.amount')
    get remainingPrices() {
        let differenceEstimate = 100;
        let lastPrice = 0;

        if (this._sortedPrices.length) {
            lastPrice = this._sortedPrices.lastObject.amount;
            const firstPrice = this._sortedPrices.length > 1 
                ? this._sortedPrices.objectAt(this._sortedPrices.length - 2).amount
                : 0;
            differenceEstimate = lastPrice - firstPrice;
        }

        let output = EmberArray();
        let currentPrice = lastPrice;
        for (let i = this._sortedPrices.length; i < maxPriceRows; i++) {
            currentPrice += differenceEstimate;
            output.addObject({ amount: currentPrice, isRequired: i < 2 });
        }

        return output;
    }

    @computed('this.board.categories.length')
    get remainingCategories() {

        let output = EmberArray();
        for (let i = this.board.categories.length; i < maxCategoryRows; i++) {
            output.addObject({ isRequired: i < 2 });
        }

        return output;
    }

    @action
    addPrice(price) {
        return this.onAddPrice(price.amount);
    }
    
}
