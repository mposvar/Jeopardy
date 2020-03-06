'use strict';
const Game = require('../models/'),
    connect = require('camo').connect,
    uri = 'nedb://db';

class GameRepository {
    async getByIdAsync(id) {
        await connect(uri);
        return Category.findOne({ _id: id });
    }

    async createOrUpdateAsync(game) {
        await connect(uri);
        return game.save();
    }

    async removeAsync(id) {
        await connect(uri);
        return Game.deleteOne({ _id: id });
    }
}

module.exports = GameRepository;