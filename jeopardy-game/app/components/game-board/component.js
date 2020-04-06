import Component from '@glimmer/component';
import { action } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { htmlSafe } from '@ember/template';

export default class GameBoardComponent extends Component {
    //gameState;
    //hasActions;
    //onSelectCategory;
    //onSelectAnswer;
    //allowAudio;

    @readOnly('args.gameState.game.boards.firstObject')
    board;

    classNames = ['game-board-component'];
    classNameBindings = ['hasActions:_has-actions'];
    attributeBindings = ['style']

    get style() {
        const columns = this.board.categories.length;
        const rows = this.board.prices.length + 1;

        return htmlSafe(`grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`);
    }

    @action selectCategory(category) {
        if (this.args.hasActions) {
            this.args.onSelectCategory(category);
        }
    }

    @action selectAnswer(answer) {
        if (this.args.hasActions) {
            this.args.onSelectAnswer(answer);
        }
    }

}
