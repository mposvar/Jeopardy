
'use strict';
const ModelBase = require('./model-base');
const Answer = require('./answer');

class Category extends ModelBase {
    constructor() {
        super();

        this.title = String;
        this.answers = [Answer];
        this.boardId = String;
    }

    static fromDisplay(display) {
        return this.create({
            _id: display.id || null,
            title: display.title,
            boardId: display.boardId,
            answers: display.answers.map((a) => {
                return Answer.fromDisplay(a);
            }),
        });
    }

    static collectionName() {
        return 'categories';
    }
}

module.exports = Category;