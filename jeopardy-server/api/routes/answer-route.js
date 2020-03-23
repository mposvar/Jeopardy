'use strict';

module.exports = function(app) {
  const answerController = require('../controllers/answer-controller');

  app.route('/answers')
    .post(answerController.createAnswer);

  app.route('/answers/:answerId')
    .put(answerController.saveAnswer);
};