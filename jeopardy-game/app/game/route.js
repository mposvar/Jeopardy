import Route from '@ember/routing/route';

export default class extends Route {
    model = function(params) {
        return this.store.find('game-state', params.game_state_id);
    };
}

