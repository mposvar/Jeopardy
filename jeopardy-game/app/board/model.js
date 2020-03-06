import Model, { attr, hasMany } from '@ember-data/model';

export default class extends Model {
    @hasMany('category', { async: false }) categories;
    @attr('array') priceRows;
}
