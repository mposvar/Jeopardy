'use strict';

class BaseDisplay {
    constructor(model) {     
        this.id = model.getId();
    }
}

module.exports = BaseDisplay;