import DS from 'ember-data';
const { Model } = DS;

export default class extends Model {
    @DS.attr() title;
    @DS.hasMany('answer') answers;
    isCategory = true;
}
