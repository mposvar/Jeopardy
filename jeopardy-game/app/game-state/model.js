import DS from 'ember-data';
const { Model } = DS;

export default class extends Model {
    @DS.belongsTo('game') game;

    @DS.hasMany('answer', { async: false })
    completedAnswers;

    @DS.belongsTo('answer', { async: false })
    activeAnswer;

    @DS.hasMany('category', { async: false })
    displayedCategories;

    @DS.hasMany('team', { async: false })
    teams;

    @DS.attr('boolean') isScoreView;

    @DS.attr('boolean') isTimeUp;
    @DS.attr('boolean') isThemeMusic;
    @DS.attr('boolean') isThinking;
}
