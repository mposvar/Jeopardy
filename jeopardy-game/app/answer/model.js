import { notEmpty } from '@ember/object/computed';
import Model, { attr, belongsTo } from '@ember-data/model';


export default class extends Model {
    @attr('number') price;
    @attr() answerText;
    @attr() questionText;
    @attr() audioFile;
    @attr() imageFile;
    @belongsTo('category') category;
    isAnswer = true;

    @notEmpty('audioFile') isAudio;
    @notEmpty('imageFile') isImage;
}
