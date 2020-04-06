'use strict';
const   Game = require('../models/game'),
        Board = require('../models/board'),
        Category = require('../models/category'),
        GameDisplay = require('../displayModels/game-display'),
        BoardDisplay = require('../displayModels/board-display'),
        CategoryDisplay = require('../displayModels/category-display'),
        connect = require('camo').connect,
        uri = 'nedb://db';


exports.fetchGame = async function(req, res) {
    const id = req.params.gameId;
    
    await connect(uri);

    var result = await fetchGameAggregate(id);

    res.json(result);
};

exports.fetchGames = async function(_, res) {
    await connect(uri);

    const games = await Game.find({ });

    const result = {
        games: games.map(g => new GameDisplay(g))
    }

    res.json(result);
};

exports.createGame = async function(req, res) {
    await connect(uri);
    
    const game = Game.createFromDisplay(req.body.game);

    let savedGame = await game.save();

    const board = Board.createInitialBoard(savedGame._id);

    const savedBoard = await board.save();

    savedGame.addBoardId(savedBoard._id);

    savedGame = await savedGame.save();
    
    const result = {
        game: new GameDisplay(savedGame),
        boards: [new BoardDisplay(savedBoard)]
    };

    res.json(result);
};

exports.saveGame = async function(req, res) {
    await connect(uri);
    const id = req.params.gameId;        

    const game = await Game.findOne({ _id: id });
    game.updateFromDisplay(req.body.game);

    const savedGame = await game.save();

    const result = {
        game: new GameDisplay(savedGame)
    }

    res.json(result);
};

const fetchGameAggregate = async function(gameId) {

    const gameQuery = Game.findOne({ _id: gameId });
    const boardsQuery = Board.find({ gameId: gameId });

    const [game, boards] = await Promise.all([gameQuery, boardsQuery]);

    const aggregate = { 
        game: new GameDisplay(game),
        boards: boards.map((board) => new BoardDisplay(board))
    };

    let boardIds = boards.map(b => b._id);
    
    if (!boardIds.length) {
        return aggregate;
    }

    const categories = await Category.find({ boardId: { $in: boardIds }});
    aggregate.categories = categories.map((c) => new CategoryDisplay(c));

    return aggregate;
}

exports.fetchGameAggregate = fetchGameAggregate;

