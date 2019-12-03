module.exports = io => {
  io.on('connection', socket => {
    socket.on('sendCode', data => {
      console.log('Data recived on server:', data);
      socket.emit('showCode', {
        codeStudent: data,
      });
    });
  });
};
