'use strict';
var EmbeddedDocument = require('camo').EmbeddedDocument;

class EmbeddedModelBase extends EmbeddedDocument {
    constructor() {
        super();

        this.documentId = {
            type: String,
            unique: true,
            required: true
        };
    }

    getId() {
        return this.documentId;
    }
}

module.exports = EmbeddedModelBase;