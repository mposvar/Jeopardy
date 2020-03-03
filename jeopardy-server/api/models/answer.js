'use strict';
const EmbeddedModelBase = require('./embedded-model-base');
const customUtils = require('nedb/lib/customUtils');

class Answer extends EmbeddedModelBase {
    constructor() {
        super();

        this.price = Number;
        this.answerText = String;
        this.questionText = String;
        this.audioFile = String;
        this.imageFile = String;
    }

    static fromDisplay(display) {
        return this.create({
            _id: display.id || customUtils.uid(16),
            price: display.price,
            answerText: display.answerText,
            questionText: display.questionText,
            audioFile: display.audioFile,
            imageFile: display.imageFile
        });
    }

    static collectionName() {
        return 'answers';
    }
}

module.exports = Answer;