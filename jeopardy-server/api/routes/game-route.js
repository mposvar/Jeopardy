'use strict';

module.exports = function(app) {
  const gameController = require('../controllers/game-controller');

  app.route('/games')
    .get(gameController.fetchGames)
    .post(gameController.createGame);

  app.route('/games/:gameId')
    .get(gameController.fetchGame)
    .put(gameController.saveGame);
};