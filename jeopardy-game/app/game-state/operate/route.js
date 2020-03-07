import Route from '@ember/routing/route';

export default class extends Route {
    setupController() {
        super.setupController(...arguments);
        this.controller.initializeSelectedItem();
    }
}
