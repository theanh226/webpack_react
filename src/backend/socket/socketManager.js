const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require('./userManager');

module.exports = io => {
  io.on('connection', socket => {
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

    // CHAT USER JOIN ROOM
    socket.on('join', ({ name, room, emailUser }, callback) => {
      const { error, user } = addUser({ id: socket.id, name, room, emailUser });
      if (error) return callback(error);
      socket.join(user.room);

      socket.broadcast.to(user.room).emit('message', {
        user: 'student',
        text: `${user.name} has joined!`,
      });
      socket.emit('message', {
        user: 'Admin',
        text: `${user.name}, Welcome to room ${user.room}.`,
      });
      callback();
    });

    // CHAT SEND MESSAGE IN ROOM
    socket.on('sendMessage', ({ message }, callback) => {
      const user = getUser(socket.id);
      io.to(user.room).emit('message', { user: user.name, text: message });

      callback();
    });

    // CHAT SEND CODE
    socket.on('sendCode', (code, callback) => {
      const user = getUser(socket.id);
      io.to(user.room).emit('codeTransaction', {
        user: user.name,
        code,
      });
      callback();
    });

    // USER DISCONNECT
    socket.on('disconnect', () => {
      const user = removeUser(socket.id);

      if (user) {
        io.to(user.room).emit('message', {
          user: user.name,
          text: `${user.name} has left.`,
        });
        io.to(user.room).emit('roomData', {
          room: user.room,
          users: getUsersInRoom(user.room),
        });
      }
    });
  });
};
