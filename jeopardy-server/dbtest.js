'use strict';
const CategoryDisplay = require('./api/displayModels/category-display');
const Category = require('./api/models/category');
var connect = require('camo').connect;
const uri = 'nedb://db/answers.nedb';

console.log('started');

connect(uri).then(function() {
    console.log('connected');
    let model = Category.fromDisplay({
        title: "Title",
        answers: [
            {
                price: 100,
                answerText: "Test 1",
                questionText: "Test Question",
                audioFile: "display.audioFile",
                imageFile: "display.imageFile"
            }
        ]
    });

    return model.save();
}).then((savedModel) => {
    console.log(JSON.stringify(new CategoryDisplay(savedModel)));
});



