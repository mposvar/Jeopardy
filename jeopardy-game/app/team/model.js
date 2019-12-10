import DS from 'ember-data';
const { Model } = DS;

export default class extends Model {
    @DS.attr() name;

    @DS.attr('number') points;
}
