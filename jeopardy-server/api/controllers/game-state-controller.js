'use strict';
var fs = require("fs");
var path = require("path");

module.exports = function(io) {
    var controller = {};
    const _io = io;

    controller.fetchGameState = function(req, res) {
        var rootPath = path.join(__dirname, '../../');
        var filePath = `${rootPath}game-states/game-state-${req.params.gameStateId}.json`;
        console.log(filePath);

        fs.readFile(filePath, 'utf8', function (_, gameStateData) {
            var result = {
                gameState: JSON.parse(gameStateData)
            };

            var gameFilePath = `${rootPath}games/game-${result.gameState.game}.json`;

            fs.readFile(gameFilePath, 'utf8', (_, gameData) => {
                result.games = [JSON.parse(gameData)];
                res.json(result);
            });
            
        });
    };

    controller.saveGameState = function(req, res) {
        var rootPath = path.join(__dirname, '../../');
        var filePath = `${rootPath}game-states/game-state-${req.params.gameStateId}.json`;

        fs.writeFile(filePath, JSON.stringify(req.body.gameState), (err) => {

            _io.sockets.emit('modelUpdated', req.body);
            res.json(req.body);
        });
    };

    controller.createGameState = function(req, res) {
        var rootPath = path.join(__dirname, '../../');
        var folderPath = `${rootPath}game-states/`;
        console.log(folderPath);
        fs.readdir(folderPath, (err, filenames) => {
            let nextId = 1;
            if (filenames.length) {
                let gameStateIds = [];
                filenames.forEach((filename) => {
                    console.log(filename.split('-')[1]);
                    gameStateIds.push(parseInt(filename.split('-')[2].split('.')[0]));
                });

                let maxId = Math.max(...gameStateIds);
                nextId = maxId + 1;
            }

            var filePath = `${rootPath}game-states/game-state-${nextId}.json`;

            var model = req.body.gameState;
            model.id = nextId;

            model.teams.forEach((t, index) => {
                t.id = index + 1;
            });

            fs.writeFile(filePath, JSON.stringify(model), (err) => {
                let response = {
                    gameState: model
                }
                res.json(response);
            });
        });

    }

    return controller;
}