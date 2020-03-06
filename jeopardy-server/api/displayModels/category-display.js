'use strict';
const BaseDisplay = require('./base-display');
const AnswerDisplay = require('./answer-display');

class CategoryDisplay extends BaseDisplay {
    constructor(model) {
        super(model);
        
        this.board = model.boardId;
        this.title = model.title;
        this.answers = model.answers.map((a) => 
        {
            return new AnswerDisplay(a);
        });
    }
}

module.exports = CategoryDisplay;