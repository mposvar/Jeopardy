import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class extends Controller {
    @action
    createBoard() {
        let game = this.store.createRecord('game');
        return game.save().then((savedGame) => {
            this.transitionToRoute('board.manage', savedGame);
        });
    }
}
