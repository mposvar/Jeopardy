import DS from 'ember-data';
const { Model } = DS;
import { notEmpty } from '@ember/object/computed';

export default class extends Model {
    @DS.attr('number') price;
    @DS.attr() answerText;
    @DS.attr() questionText;
    @DS.attr() audioFile;
    @DS.attr() imageFile;
    @DS.belongsTo('category') category;
    isAnswer = true;

    @notEmpty('audioFile') isAudio;
    @notEmpty('imageFile') isImage;

}
