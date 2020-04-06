'use strict';
// var fs = require("fs");
// var path = require("path");

const   GameState = require('../models/game-state'),
        GameStateDisplay = require('../displayModels/game-state-display'),
        GameController = require('./game-controller'),
        connect = require('camo').connect,
        uri = 'nedb://db';

class GameStateController {

    async fetchGameState(req, res) {
        const id = req.params.gameStateId;

        await connect(uri);

        const gameState = await GameState.findOne({ _id: id });
        const gameAggregate = await GameController.fetchGameAggregate(gameState.gameId);

        var result = {
            gameState: new GameStateDisplay(gameState),
            games: [gameAggregate.game],
            boards: gameAggregate.boards,
            categories: gameAggregate.categories
        };

        res.json(result);
    }

    async saveGameState(req, res, io) {
        const id = req.params.gameStateId;

        await connect(uri);

        const gameState = await GameState.findOne({ _id: id }); 
        gameState.updateFromDisplay(req.body.gameState);

        const savedGameState = await gameState.save();

        const result = {
            gameState: new GameStateDisplay(savedGameState)
        };

        io.sockets.emit('modelUpdated', req.body);
        res.json(result);
    };

    async createGameState(req, res) {

        await connect(uri);

        const gameState = GameState.createFromDisplay(req.body.gameState);

        let savedGameState = await gameState.save();

        const result = {
            gameState: new GameStateDisplay(savedGameState)
        };

        res.json(result);
    }
}

module.exports = GameStateController;
// function(io) {
//     var controller = {};
//     const _io = io;

//     controller.fetchGameState = async function(req, res) {
//         const id = req.params.gameStateId;

//         await connect(uri);

//         const gameState = await GameState.findOne({ _id: id });
//         const gameAggregate = await GameController.fetchGameAggregate(gameState.gameId);

//         var result = {
//             gameState: new GameStateDisplay(gameState),
//             games: [gameAggregate.game],
//             boards: gameAggregate.boards,
//             categories: gameAggregate.categories
//         };

//         res.json(result);
//     };

//     controller.saveGameState = async function(req, res) {
//         const id = req.params.gameStateId;

//         await connect(uri);

//         const gameState = await GameState.findOne({ _id: id }); 
//         gameState.updateFromDisplay(req.body.gameState);

//         const savedGameState = await gameState.save();

//         const result = {
//             gameState: new GameStateDisplay(savedGameState);
//         }

//         _io.sockets.emit('modelUpdated', req.body);
//         res.json(req.body);
//     };

//     controller.createGameState = async function(req, res) {

//         await connect(uri);

//         const gameState = GameState.createFromDisplay(req.body.game);

//         let savedGameState = await gameState.save();

//         const result = {
//             gameState: new GameStateDisplay(savedGameState)
//         };

//         res.json(result);
//     }

//     return controller;
// }