'use strict';
const BaseDisplay = require('./base-display');

class BoardDisplay extends BaseDisplay {
    constructor(model) {
        super(model);

        this.game = model.gameId;
        this.categories = model.categoryIds;
        this.prices = model.prices;
    }
}

module.exports = BoardDisplay;