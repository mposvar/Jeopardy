'use strict';
const Board = require('../models/board'),
    Category = require('../models/category'),
    AnswerRow = require('../models/answer-row'),
    BoardDisplay = require('../displayModels/board-display'),
    CategoryDisplay = require('../displayModels/category-display'),
    AnswerRowDisplay = require('../displayModels/answer-row-display'),
    connect = require('camo').connect,
    uri = 'nedb://db';


exports.fetchBoard = function(req, res) {
    const id = req.params.boardId;
    connect(uri).then(function() {
        let result = { };
        let boardQuery = Board.findOne({ _id: id }).then(function(board) {
            result.board = board ? new BoardDisplay(board) : null;
        }).catch(err => { throw err; });

        let categoryQuery = Category.find({ boardId: id }).then(function(categories) {
            result.categories = categories.map(c => new CategoryDisplay(c));
        }).catch(err => { throw err; });

        let answerRowQuery = AnswerRow.find({ boardId: id }).then(function(answerRows) {
            result.answerRows = answerRows.map(a => new AnswerRowDisplay(a));
        }).catch(err => { throw err; });

        Promise.all([boardQuery, answerRowQuery, categoryQuery]).then(() => {
            res.json(result);
        });
    });
};

exports.fetchBoards = function(_, res) {
    connect(uri).then(function() {
        let result = { };

        Board.find({ }).then(function(boards) {
            result.boards = boards.map(b => new BoardDisplay(b));
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

