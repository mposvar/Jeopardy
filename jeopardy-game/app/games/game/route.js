import Route from '@ember/routing/route';

export default class extends Route{
    model(params) {
        return this.store.findRecord('game', params.game_id);
    }
}