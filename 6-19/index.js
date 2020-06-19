var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


//socket.on  socket.emit 
io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    socket.on('disconnect', () => {
      console.log('user disconnected', socket.id);
    });

    /**SOCKET PART MULTIPLAYER*/
    socket.on('ArrowUp', (msg) => {
        console.log('message: ' + msg);
        io.emit('ArrowUp', msg)
    });

    socket.on('ArrowDown', ()=> io.emit('ArrowDown'))
    socket.on('ArrowLeft', ()=> io.emit('ArrowLeft'))
    socket.on('ArrowRight', ()=> io.emit('ArrowRight'))
    socket.on('Attack', ()=> io.emit('Attack'))
    /**SOCKET PART MULTIPLAYER*/


});

  

http.listen(3000, () => {
  console.log('listening on *:3000');
});



//npm init -y  //creates backend server node project 
//npm i express socket.io //installs 2 things needed
//boilerplate socket connection code on
//index.html with front end socket io 
