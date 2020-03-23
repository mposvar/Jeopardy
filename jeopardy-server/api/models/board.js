'use strict';
const ModelBase = require('./model-base');
const Price = require('./price');

class Board extends ModelBase {
    constructor() {
        super();

        this.gameId = String;
        this.categoryIds = [String];
        this.prices = [Price];
        this.round = {
            type: Number,
            choices: [0, 1]
        }
    }

    static createFromDisplay(display) {
        return this.create({
            round: display.round,
            gameId: display.game,
            categoryIds: display.categories || [],
            prices: display.prices || []
        });
    }

    static createInitialBoard(gameId) {
        return this.create({
            gameId: gameId,
            round: 1
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