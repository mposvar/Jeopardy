const express = require('express'),
  app = express(),
  http = require('http').createServer(app)
  port = process.env.PORT || 4300
  bodyParser = require('body-parser')
  io = require('socket.io')(http);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  

const boardRoute = require('./api/routes/boardRoute'); //importing route
boardRoute(app);

const gameStateRoute = require('./api/routes/gameStateRoute');
gameStateRoute(app, io);

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(port);

console.log(`Jeopardy Game API server started on: ${port}`);