'use strict';
const BaseDisplay = require('./base-display');

class TeamDisplay extends BaseDisplay {
    constructor(model) {
        super(model);

        this.name = model.name;
        this.points = model.points;
    }
}

module.exports = TeamDisplay;