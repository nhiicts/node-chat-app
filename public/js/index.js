var socket = io();
socket.on('connect', function () {
  console.log('connected to server');
  socket.emit('createMessage', {
    from: 'Tran Hong Nhi',
    text: 'Hey, That works for me'
  })
});
socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
socket.on('newMessage', function (message) {
  console.log('new message ', message);
});