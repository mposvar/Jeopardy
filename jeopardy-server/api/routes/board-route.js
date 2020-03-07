'use strict';

module.exports = function(app) {
  const boardController = require('../controllers/board-controller');

  app.route('/boards')
    .get(boardController.fetchBoards)
    .post(boardController.createBoard);

  app.route('/boards/:board_id')
    .get(boardController.fetchBoard)
    .put(boardController.saveBoard);
};