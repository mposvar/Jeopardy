import Component from '@ember/component';
import { action, computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import { htmlSafe } from '@ember/template';

export default class extends Component {
    gameState = null;

    hasActions = false;

    @oneWay('gameState.game')
    game;

    classNames = ['game-board-component'];
    classNameBindings = ['hasActions:_has-actions'];
    attributeBindings = ['style']

    @computed('gameState.game.{categories.length,answerRows.length}')
    get style() {
        let columns = this.get('gameState.game.categories.length');
        let rows = this.get('gameState.game.answerRows.length') + 1;

        return `grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`;
    }

    @action
    selectCategory(category) {
        if (this.hasActions) {
            this.onSelectCategory(category);
        }
    }

    @action
    selectAnswer(answer) {
        if (this.hasActions) {
            this.onSelectAnswer(answer);
        }
    }

}
