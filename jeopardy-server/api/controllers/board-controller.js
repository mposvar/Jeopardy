'use strict';
const Board = require('../models/board'),
    Game = require('../models/game'),
    Category = require('../models/category'),
    AnswerRow = require('../models/answer-row'),
    BoardDisplay = require('../displayModels/board-display'),
    CategoryDisplay = require('../displayModels/category-display'),
    connect = require('camo').connect,
    uri = 'nedb://db';


exports.createBoard = async function(req, res) {
    await connect(uri);
    
    const board = Board.createFromDisplay(req.body.board);

    const savedBoard = await board.save();

    const game = await Game.findOne({ _id: savedBoard.gameId });

    game.addBoardId(savedBoard._id);

    await game.save();

    let result = {
        board: new BoardDisplay(savedBoard)
    }

    res.json(result);
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

