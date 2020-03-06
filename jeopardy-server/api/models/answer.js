'use strict';
const EmbeddedModelBase = require('./embedded-model-base');
const customUtils = require('nedb/lib/customUtils');

class Answer extends EmbeddedModelBase {
    constructor() {
        super();

        this.categoryId = String;
        this.priceId = String;
        this.answerText = String;
        this.questionText = String;
        this.audioFile = String;
        this.imageFile = String;
    }

    static createFromDisplay(display) {
        return this.create({
            _id: customUtils.uid(16),
            categoryId: display.category,
            priceId: display.price,
            answerText: display.answerText,
            questionText: display.questionText,
            audioFile: display.audioFile,
            imageFile: display.imageFile
        });
    }

    updateFromDisplay(display) {
        this.priceId = display.price;
        this.answerText = display.answerText;
        this.questionText = display.questionText;
        this.audioFile = display.audioFile;
        this.imageFile = display.imageFile;
    }

    static collectionName() {
        return 'answers';
    }
}

module.exports = Answer;