module.exports = io => {
  io.on('connection', socket => {
    console.log(socket.id);
    socket.on('sendCode', ({ code }) => {
      console.log('Data recived on server:', code);
      socket.emit('showCode', {
        codeStudent: code,
      });
    });
  });
};
