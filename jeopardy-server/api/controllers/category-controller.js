'use strict';
const Category = require('../models/category'),
    CategoryDisplay = require('../displayModels/category-display'),
    Board = require('../models/board'),
    connect = require('camo').connect,
    uri = 'nedb://db';


exports.fetchCategory = async function(req, res) {
    const id = req.params.categoryId;

    await connect(uri);

    let category = await Category.findOne({ _id: id });

    let result = {
        category: new CategoryDisplay(category)
    };

    res.json(result);
};

exports.fetchCategoriesByBoardId = async function(_, res) {
    const id = req.params.boardId;

    await connect(uri);        
        
    let categories = await Category.find({ boardId: id });

    let result = {
        categories: categories.map(b => new CategoryDisplay(b))
    }

    res.json(result);
};

exports.createCategory = async function(req, res) {
    await connect(uri);

    const category = Category.createFromDisplay(req.body.category);

    const savedCategory = await category.save();

    if (!savedCategory) return null;

    const board = await Board.findOne({ _id: savedCategory.boardId });

    board.addCategoryId(savedCategory._id);

    await board.save();

    let result = {
        category: new CategoryDisplay(savedCategory)
    }
    
    res.json(result);
};

exports.saveCategory = async function(req, res) {
    const id = req.params.categoryId;

    await connect(uri);

    let category = await Category.findOne({ _id: id });

    category.updateFromDisplay(req.body.category);

    const updatedCategory = await category.save();

    let result = {
        category: new CategoryDisplay(updatedCategory)
    };

    res.json(result);
};

