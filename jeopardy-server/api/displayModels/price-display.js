'use strict'
const BaseDisplay = require('./base-display');

class PriceDisplay extends BaseDisplay {
    constructor(model) {
        super(model);

        this.board = model.boardId;
        this.amount = model.amount;
    }
}

module.exports = PriceDisplay;