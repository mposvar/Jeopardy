'use strict';
const BaseDisplay = require('./base-display');
const PriceDisplay = require('./price-display');

class BoardDisplay extends BaseDisplay {
    constructor(model) {
        super(model);

        this.game = model.gameId;
        this.categories = model.categoryIds;
        this.prices = model.prices.map((price) => new PriceDisplay(price));
        this.round = model.round;
    }
}

module.exports = BoardDisplay;