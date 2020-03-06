'use strict';

module.exports = function(app) {
  const categoryController = require('../controllers/category-controller');

  app.route('/categories')
    .post(categoryController.createCategory);

  app.route('/categories/:categoryId')
    .get(categoryController.fetchCategory)
    .put(categoryController.saveCategory);
};