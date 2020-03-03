'use strict';
const ModelBase = require('./model-base');
//var Document = require('camo').Document;

class Board extends ModelBase {
    constructor() {
        super();

        this.title = String;

        this.categories = [String];

        this.answerRows = [String];
    }

    static fromDisplay(display) {
        console.log(display.categories);
        return this.create({
            _id: display.id || null,
            title: display.title,
            categories: display.categories || [],
            answerRows: display.answerRows || []
        });
    }

    updateFromDisplay(display) {
        this.title = display.title;
        this.categories = display.categories || [],
        this.answerRows = display.answerRows || []
    }

    static collectionName() {
        return 'boards';
    }
}

module.exports = Board;