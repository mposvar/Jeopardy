'use strict';
const Board = require('../models/board'),
    Category = require('../models/category'),
    BoardDisplay = require('../displayModels/board-display'),
    CategoryDisplay = require('../displayModels/category-display'),
    connect = require('camo').connect,
    uri = 'nedb://db';


exports.fetchCategory = function(req, res) {
    const id = req.params.categoryId;
    connect(uri).then(function() {
        Category.findOne({ _id: id }).then(function(category) {
            let result = {
                category: new CategoryDisplay(category)
            };
            res.json(result);
        }).catch(err => { throw err; });
    });
};

exports.fetchCategoriesByBoardId = function(_, res) {
    connect(uri).then(function() {
        const id = req.params.boardId
        let result = { };

        Category.find({ boardId:   }).then(function(categories) {
            result.categories = categories.map(b => new CategoryDisplay(b));
            res.json(result);
        }).catch(err => { throw err; });

    });
};

exports.createBoard = function(req, res) {
    return connect(uri).then(function() {

        const board = Board.fromDisplay(req.body.board);

        return board.save().then((savedBoard) => {
            if (!savedBoard) return null;
            let result = {
                board: new BoardDisplay(savedBoard)
            }
            res.json(result);
        }).catch(err => { throw err; });
    });
};

exports.saveBoard = function(req, res) {
    return connect(uri).then(function() {
        const id = req.params.boardId;

        return Board.findOne({ _id: id }).then((board) => {
            
            board.updateFromDisplay(req.body.board);

            return board.save().then((savedBoard) => {
                if (!savedBoard) return null;
                let result = {
                    board: new BoardDisplay(savedBoard)
                }
                res.json(result);
            }).catch(err => { throw err; });

        }).catch(err => { throw err; });
        
    });
};

