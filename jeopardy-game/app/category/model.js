import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default class extends Model {
    @attr('string') title;

    @hasMany('answer') answers;
    @belongsTo('board') board;
    isCategory = true;
}
