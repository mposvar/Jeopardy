import Component from '@ember/component';
import { computed } from '@ember/object';

export default class extends Component {
    classNames = ['score-board-component'];
    attributeBindings = ['style']
    
    @computed('gameState.teams.length')
    get style() {
        let columns = this.get('gameState.teams.length');

        return `grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(1, 1fr);`;
    }
}
