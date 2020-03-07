'use strict';
const   Board = require('../models/board'),
        Game = require('../models/game'),
        BoardDisplay = require('../displayModels/board-display'),
        connect = require('camo').connect,
        uri = 'nedb://db';


exports.fetchBoards = async function(req, res) {
    await connect(uri);

    const ids = req.params.ids;
    const boards = await Board.find({ _id: ids });

    const result = {
        boards: boards.map((board) => new BoardDisplay(board))
    }

    res.json(result);
}

exports.fetchBoard = async function(req, res) {
    await connect(uri);

    const id = req.params.board_id;
    const board = await Board.findOne({ _id: id });

    const result = {
        board: new BoardDisplay(board)
    }

    res.json(result);
}

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

exports.saveBoard = async function(req, res) {
    await connect(uri);
    
    const id = req.params.board_id;

    const board = await Board.findOne({ _id: id });

    board.updateFromDisplay(req.body.board);

    const savedBoard = await board.save();

    let result = {
        board: new BoardDisplay(savedBoard)
    }
    
    res.json(result);
};

