const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// connect to socket io in socketManager.js
require('./socketManager')(io);

app.use(cors());

server.listen(process.env.PORT || 5000);
console.log(`Server has started: 5000`);
module.exports = { io };
