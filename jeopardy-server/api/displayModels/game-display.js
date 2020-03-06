'use strict';
const BaseDisplay = require('./base-display');
const AnswerDisplay = require('./answer-display');

class GameDisplay extends BaseDisplay {
    constructor(model) {
        super(model);
        
        this.title = model.title;
        this.boards = model.boardIds;

        if (model.answer) {
            this.finalJeopardy = new AnswerDisplay(model.answer);
        }
    }
}

module.exports = GameDisplay;