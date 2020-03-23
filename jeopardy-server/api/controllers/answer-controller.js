'use strict';
const Answer = require('../models/answer'),
    AnswerDisplay = require('../displayModels/answer-display'),
    Category = require('../models/category'),
    connect = require('camo').connect,
    uri = 'nedb://db';



exports.createAnswer = async function(req, res) {
    await connect(uri);

    const answer = Answer.createFromDisplay(req.body.answer);

    const category = await Category.findOne({ _id: answer.categoryId });

    category.addAnswer(answer);

    await category.save();

    let result = {
        answer: new AnswerDisplay(answer)
    }

    res.json(result);
}


exports.saveAnswer = async function(req, res) {
    await connect(uri);

    const id = req.params.answerId
    const categoryId = req.body.answer.category;

    const category = await Category.findOne({ _id: categoryId });

    const answer = category.answers.find((answer) => answer.documentId === id);

    console.log(category);

    console.log(req.body.answer);


    answer.updateFromDisplay(req.body.answer);

    await category.save();

    let result = {
        answer: new AnswerDisplay(answer)
    };

    res.json(result);
}


