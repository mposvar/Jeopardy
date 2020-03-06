'use strict';
module.exports = function(app, io) {
  const gameStateController = require('../controllers/game-state-controller')(io);

  app.route('/gameStates/:gameStateId')
    .get(gameStateController.fetchGameState)
    .put(gameStateController.saveGameState);

  app.route('/gameStates')
    .post(gameStateController.createGameState);
};