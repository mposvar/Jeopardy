import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class extends Controller {

    isSaving = false;

    @action
    saveGame() {
        this.set('isSaving', true);
        this.model.save().then(() => {
            this.set('isSaving', false);
        });
    }
}
