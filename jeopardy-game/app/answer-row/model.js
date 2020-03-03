import Model, { attr, belongsTo } from '@ember-data/model';

export default class extends Model {
    @attr('number') price;
    @belongsTo('game') game;
}
