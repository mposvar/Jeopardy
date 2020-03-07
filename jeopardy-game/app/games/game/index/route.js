import Route from '@ember/routing/route';

export default class extends Route{
    redirect() {
        this.transitionTo('games.game.edit', this.model);
    }
}