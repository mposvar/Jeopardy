'use strict';
const EmbeddedModelBase = require('./embedded-model-base');
const customUtils = require('nedb/lib/customUtils');

class Price extends EmbeddedModelBase {
    constructor() {
        super();

        this.boardId = String;
        this.amount = Number;
    }

    static createFromDisplay(display) {
        return this.create({
            documentId: customUtils.uid(16),
            boardId: display.board,
            amount: display.amount,
        });
    }


    updateFromDisplay(display) {
        this.amount = display.amount;
    }

    static collectionName() {
        return 'prices';
    }
}

module.exports = Price;