import Model, { attr, belongsTo } from '@ember-data/model';


export default class extends Model {
    @attr('string') title;
    @belongsTo('board') roundOne;
    @belongsTo('board') roundTwo;
    @belongsTo('answer') finalJeopardyAnswer;
}
