module.exports = io => {
  io.on('connection', socket => {
    socket.on('sendCode', ({ code }) => {
      console.log('Data recived on server:', code);
      socket.emit('showCode', {
        codeStudent: code,
      });
    });
    // Tutor remove student from the queue
    socket.on('listQueueOrListTuorChange', () => {
      socket.broadcast.emit('listChanged');
    });
    // Student join the queue
    socket.on('studentJoinQueue', () => {
      socket.broadcast.emit('oneStudentEnteredQueue');
    });
    // Student leave from the queue
    socket.on('studentLeaveQueue', () => {
      socket.broadcast.emit('oneStudentLeavedQueue');
    });
  });
};
