'use strict';
const BaseDisplay = require('./base-display');
const TeamDisplay = require('./team-display');

class GameStateDisplay extends BaseDisplay {
    constructor(model) {
        super(model);

        this.game = model.gameId;
        this.completedAnswers = model.completedAnswerIds;
        this.activeAnswer = model.activeAnswerId;
        this.displayedCategories = model.displayedCategoryIds;
        this.teams = model.teams ? model.teams.map((team) => { return new TeamDisplay(team)}) : [];
        this.isScoreView = model.isScoreView;
        this.isTimeUp = model.isTimeUp;
        this.isThemeMusic = model.isThemeMusic;
        this.isThinking = model.isThinking;
    }
}

module.exports = GameStateDisplay;