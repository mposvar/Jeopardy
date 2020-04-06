
'use strict';
const ModelBase = require('./model-base');
const Team = require('./team');

class GameState extends ModelBase {
    constructor() {
        super();

        this.gameId = String;
        this.completedAnswerIds = [String];
        this.activeAnswerId = String;
        this.displayedCategoryIds = [String];
        this.teams = [Team];
        this.isScoreView = Boolean;
        this.isTimeUp = Boolean;
        this.isThemeMusic = Boolean;
        this.isThinking = Boolean;
    }

    static createFromDisplay(display) {
        let teams = [];
        if (display.teams) {
            teams = display.teams.map((t) => {
                return Team.createFromDisplay(t);
            });
        }
        return this.create({
            gameId: display.game,
            completedAnswerIds: display.completedAnswers,
            activeAnswerId: display.activeAnswer,
            displayedCategoryIds: display.displayedCategories,
            teams: teams,
            isScoreView: display.isScoreView,
            isTimeUp: display.isTimeUp,
            isThemeMusic: display.isThemeMusic,
            isThinking: display.isThinking
        });
    }

    updateFromDisplay(display) {
        this.gameId = display.game;
        this.completedAnswerIds = display.completedAnswers;
        this.activeAnswerId = display.activeAnswer;
        this.displayedCategoryIds = display.displayedCategories;
        this.isScoreView = display.isScoreView;
        this.isTimeUp = display.isTimeUp;
        this.isThemeMusic = display.isThemeMusic;
        this.isThinking = display.isThinking;
    }

    static collectionName() {
        return 'gameStates';
    }
}

module.exports = GameState;