'use strict';
const BaseDisplay = require('./base-display');

class AnswerDisplay extends BaseDisplay {
    constructor(model) {
        super(model);

        this.category = model.categoryId;
        this.price = model.priceId;
        this.answerText = model.answerText;
        this.questionText = model.questionText;
        this.audioFile = model.audioFile;
        this.imageFile = model.imageFile;
    }
}

module.exports = AnswerDisplay;