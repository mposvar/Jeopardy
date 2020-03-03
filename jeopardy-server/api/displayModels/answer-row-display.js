'use strict';
const BaseDisplay = require('./base-display');

class AnswerRowDisplay extends BaseDisplay {
    constructor(model) {
        super(model);

        this.price = model.price;
    }
}

module.exports = AnswerRowDisplay;