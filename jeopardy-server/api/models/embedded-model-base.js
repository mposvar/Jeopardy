'use strict';
var EmbeddedDocument = require('camo').EmbeddedDocument;

class EmbeddedModelBase extends EmbeddedDocument {
    constructor() {
        super();

        this._id = {
            type: String,
            unique: true
        };
    }

    getId() {
        return this._id;
    }
}

module.exports = EmbeddedModelBase;