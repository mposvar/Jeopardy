'use strict';
module.exports = function(app) {
  const gameController = require('../controllers/gameController');

  app.route('/games/:gameId')
    .get(gameController.fetchGame)
    .post(gameController.saveGame);

};