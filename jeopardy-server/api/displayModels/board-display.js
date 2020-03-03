'use strict';
const BaseDisplay = require('./base-display');

class BoardDisplay extends BaseDisplay {
    constructor(model) {
        super(model);

        this.title = model.title;
        this.categories = model.categories;
        this.answerRows = model.answerRows;
    }
}

module.exports = BoardDisplay;