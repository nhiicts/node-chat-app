const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express(); 
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to chat app'
  })
  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'New user joined',
  })
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    socket.broadcast.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
