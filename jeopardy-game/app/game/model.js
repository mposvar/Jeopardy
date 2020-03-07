import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
import { computed } from '@ember/object';

export default class extends Model {
    @attr('string') title;
    @hasMany('board') boards;
    @belongsTo('answer') finalJeopardy;

    @computed('boards.@each.round')
    get roundOneBoard() {
        return this.get('boards').findBy('round', 1);
    }

    @computed('boards.@each.round')
    get roundTwoBoard() {
        return this.get('boards').findBy('round', 2);
    }
}
