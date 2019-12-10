import DS from 'ember-data';
const { Model } = DS;

export default class extends Model {
    @DS.attr('string') title;

    @DS.hasMany('category', { async: false }) categories;
    @DS.hasMany('answer-row', { async: false }) answerRows;
}
