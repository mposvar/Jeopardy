'use strict';

module.exports = function(app) {
  const boardController = require('../controllers/boardController');

  app.route('/boards')
    .get(boardController.fetchBoards)
    .post(boardController.createBoard);

  app.route('/boards/:boardId')
    .get(boardController.fetchBoard)
    .put(boardController.saveBoard);
};