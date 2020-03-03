'use strict';
var Document = require('camo').Document;

class ModelBase extends Document {
    getId() {
        return this._id;
    }
}

module.exports = ModelBase;