import Route from '@ember/routing/route';
import { inject as injectService } from '@ember/service';

export default class extends Route {
    @injectService() socket;

    constructor() {
        super(...arguments);
        this.socket.initialize();        
    }
}
