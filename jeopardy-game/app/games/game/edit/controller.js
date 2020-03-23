import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class extends Controller {

    isSaving = false;

    @action
    saveGame() {
        this.set('isSaving', true);
        this.model.save().then(() => {
            this.set('isSaving', false);
        });
    }

    @action
    addCategory(board) {
        this.set('isSaving', true);

        const category = this.store.createRecord('category', {
            board: board
        });

        return category.save().then(() => {
            this.set('isSaving', false);
        });
    }

    @action
    addPrice(board, amount) {
        this.set('isSaving', true);

        const price = this.store.createRecord('price', {
            board: board,
            amount: amount
        });

        return price.save().then(() => {
            this.set('isSaving', false);
        });
    }

    @action addAnswer(category, price) {
        this.set('isSaving', true);

        const answer = this.store.createRecord('answer', {
            price: price,
            category: category
        });

        return answer.save().then(() => {
            this.set('isSaving', false);
        });
    }   

    @action
    addBoard() {
        this.set('isSaving', true);

        const board = this.store.createRecord('board', {
            game: this.model,
            round: 2
        });

        return board.save().then(() => {
            this.set('isSaving', false);
        });
    }

    @action
    addFinalJeopardy() {

    }
}
