import Component from '@glimmer/component';
import { oneWay } from '@ember/object/computed';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EditableTextComponent extends Component {

    //value
    //defaultText
    //onSaveText
    //input ...arguments

    @tracked isEditing = false;

    @oneWay('args.value') _value = null;

    autoFocus(element) {
        element.focus();
    }

    _saveAndClose() {
        this.isEditing = false;
        this.args.onSaveText(this._value);
    }

    @action setIsEditing() {
        this.isEditing = true;
    }

    @action setValue(event) {
        this._value = event.target.value;
    }

    @action saveOnEnter(event) {
        if (event.which === 13) {
            this._saveAndClose();
        }
    }

    @action saveAndClose() {
        this._saveAndClose();
    }
}
