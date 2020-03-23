
'use strict';
const ModelBase = require('./model-base');
const Answer = require('./answer');

class Category extends ModelBase {
    constructor() {
        super();

        this.boardId = String;
        this.title = String;
        this.answers = [Answer];
    }

    static createFromDisplay(display) {
        let answers = [];
        if (display.answers) {
            answers = display.answers.map((a) => {
                return Answer.createFromDisplay(a);
            });
        }
        return this.create({
            boardId: display.board,
            title: display.title,
            answers: answers
        });
    }

    addAnswer(answer) {
        this.answers.push(answer);
    }

    updateFromDisplay(display) {
        this.title = display.title;
    }

    static collectionName() {
        return 'categories';
    }
}

module.exports = Category;