'use strict';
const ModelBase = require('./model-base');
const Answer = require('./answer');

class Game extends ModelBase {
    constructor() {
        super();

        this.title = String;
        this.boardIds = [String];
        this.finalJeopardy = Answer;
    }

    static createFromDisplay(display) {
        return this.create({
            title: display.title
        });
    }

    updateFromDisplay(display) {
        this.title = display.title;
    }

    addBoardId(boardId) {
        this.boardIds.push(boardId);
    }

    removeBoardId(boardId) {
        const index = this.boardIds.indexOf(boardId);
        if (index > -1) {
            this.boardIds.splice(index, 1);
        }
    }

    addFinalJeopardy(answer) {
        this.answer = answer;
    }

    static collectionName() {
        return 'games';
    }
}

module.exports = Game;