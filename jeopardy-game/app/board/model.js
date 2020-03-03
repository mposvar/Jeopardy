import Model, { attr, hasMany } from '@ember-data/model';

export default class extends Model {
    @attr('string') title;

    @hasMany('category', { async: false }) categories;
    @hasMany('answer-row', { async: false }) answerRows;
}
