
'use strict';
const ModelBase = require('./model-base');

class AnswerRow extends ModelBase {
    constructor() {
        super();

        this.price = Number;
        this.boardId = String;
    }

    static fromDisplay(display) {
        return this.create({
            _id: display.id || null,
            boardId: display.boardId,
            price: display.price,
        });
    }

    static collectionName() {
        return 'answerRows';
    }
}

module.exports = AnswerRow;