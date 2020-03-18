'use strict';
const Price = require('../models/price'),
    PriceDisplay = require('../displayModels/price-display'),
    Board = require('../models/board'),
    connect = require('camo').connect,
    uri = 'nedb://db';


exports.createPrice = async function(req, res) {
    await connect(uri);

    const price = Price.createFromDisplay(req.body.price);

    const board = await Board.findOne({ _id: price.boardId });

    board.addPrice(price);

    await board.save();

    let result = {
        price: new PriceDisplay(price)
    };
    
    res.json(result);
};

exports.savePrice = async function(req, res) {
    const id = req.params.priceId;
    const boardId = req.body.price.board;

    await connect(uri);

    let board = await Board.findOne({ _id: boardId });

    let price = board.prices.find((price) => price._id === id);

    price.updateFromDisplay(req.body.price);

    await board.save();

    let result = {
        price: new PriceDisplay(price)
    };

    res.json(result);
};

