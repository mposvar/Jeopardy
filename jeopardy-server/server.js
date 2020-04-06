const express = require('express'),
  app = express(),
  http = require('http').createServer(app)
  port = process.env.PORT || 4300
  bodyParser = require('body-parser')
  io = require('socket.io')(http);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  

const gameRoute = require('./api/routes/game-route'); //importing route
gameRoute(app);

const boardRoute = require('./api/routes/board-route');
boardRoute(app);

const categoryRoute = require('./api/routes/category-route');
categoryRoute(app);

const priceRoute = require('./api/routes/price-route');
priceRoute(app);

const answerRoute = require('./api/routes/answer-route');
answerRoute(app);

const gameStateRoute = require('./api/routes/game-state-route');
gameStateRoute(app, io);

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(port);

console.log(`Jeopardy Game API server started on: ${port}`);