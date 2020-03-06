'use strict';
const GameDisplay = require('./api/displayModels/game-display');
const Game = require('./api/models/game');
var connect = require('camo').connect;
const uri = 'nedb://db/answers.nedb';

console.log('started');

const testIt = async () => {
    await connect(uri);

    console.log('connected');

    let model = Game.createFromDisplay({
        title: "Title"
    });

    console.log(model);

    let savedModel = await model.save();

    console.log(savedModel);

    console.log(JSON.stringify(new GameDisplay(savedModel)));
}

testIt();




