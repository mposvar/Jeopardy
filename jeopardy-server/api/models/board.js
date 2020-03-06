'use strict';
const ModelBase = require('./model-base');
const Price = require('./price');

class Board extends ModelBase {
    constructor() {
        super();

        this.gameId = String;
        this.categoryIds = [String];
        this.prices = [Price];
    }

    static createFromDisplay(display) {
        return this.create({
            _id: display.id || null,
            gameId: display.game,
            categoryIds: display.categories || [],
            prices: display.prices || []
        });
    }

    addPrice(price) {
        this.prices.push(price);
    }

    addCategoryId(categoryId) {
        this.categoryIds.push(categoryId);
    }

    static collectionName() {
        return 'boards';
    }
}

module.exports = Board;