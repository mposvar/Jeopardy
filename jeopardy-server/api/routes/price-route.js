'use strict';

module.exports = function(app) {
  const priceController = require('../controllers/price-controller');

  app.route('/prices')
    .post(priceController.createPrice);

  app.route('/categories/:priceId')
    .put(priceController.savePrice);
};