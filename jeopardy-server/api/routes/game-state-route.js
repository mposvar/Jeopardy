'use strict';
const GameStateController = require('../controllers/game-state-controller');

module.exports = function(app, io) {
  const gameStateController = new GameStateController(io);

  app.route('/gameStates/:gameStateId')
    .get(gameStateController.fetchGameState)
    .put((req, res) => {
        gameStateController.saveGameState(req, res, io);
    });

  app.route('/gameStates')
    .post(gameStateController.createGameState);
};