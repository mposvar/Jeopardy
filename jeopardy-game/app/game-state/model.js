import DS from 'ember-data';
const { Model, belongsTo, hasMany, attr } = DS;

export default class extends Model {
    @belongsTo('game') game;

    @hasMany('answer', { async: false })
    completedAnswers;

    @belongsTo('answer', { async: false })
    activeAnswer;

    @hasMany('category', { async: false })
    displayedCategories;

    @hasMany('team', { async: false })
    teams;

    @attr('boolean') isScoreView;

    @attr('boolean') isTimeUp;
    @attr('boolean') isThemeMusic;
    @attr('boolean') isThinking;
}
