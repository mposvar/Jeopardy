'use strict';
const EmbeddedModelBase = require('./embedded-model-base');
const customUtils = require('nedb/lib/customUtils');

class Team extends EmbeddedModelBase {
    constructor() {
        super();

        this.name = String;
        this.points = Number;
    }

    static createFromDisplay(display) {
        return this.create({
            documentId: customUtils.uid(16),
            name: display.name,
            points: display.points
        });
    }

    updateFromDisplay(display) {
        this.name = display.name;
        this.points = display.points;
    }

    static collectionName() {
        return 'teams';
    }
}

module.exports = Team;