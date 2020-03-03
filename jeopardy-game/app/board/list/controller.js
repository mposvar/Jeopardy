import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class extends Controller {
    @action
    createBoard() {
        let board = this.store.createRecord('board');
        return board.save().then((savedBoard) => {
            this.transitionToRoute('board.manage', savedBoard);
        });
    }
}
