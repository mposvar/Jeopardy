import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class extends Model {
    @hasMany('category') categories;
    @hasMany('price') prices;
    @attr('number') round;
    @belongsTo('game') game;
}
