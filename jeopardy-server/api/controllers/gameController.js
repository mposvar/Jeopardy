'use strict';
var fs = require("fs");
var path = require("path");


exports.fetchGame = function(req, res) {
    var rootPath = path.join(__dirname, '../../');
    var filePath = `${rootPath}games/game-${req.params.gameId}.json`;
    console.log(filePath);

    fs.readFile(filePath, 'utf8', (err, data) => {

        var result = {
            game: JSON.parse(data)
        };

        res.json(result);
     });
};

exports.saveGame = function(req, res) {
    var rootPath = path.join(__dirname, '../../');
    console.log(req.body.id);
    var filePath = `${rootPath}games/game-${req.body.id}.json`;

    fs.writeFile(filePath, req.body, (err) => {

        var result = {
            game: JSON.parse(req.body)
        };

        res.json(result);
     });
};

