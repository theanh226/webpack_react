const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const connectDB = require('./config/db');
// const generateUse = require('./faker_students');

// generateUse();
app.use(cors());
// Connect Database MongoDB
connectDB();

// connect to socket io in socketManager.js
require('./socket/socketManager')(io);

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./api/userAPI'));
app.use('/api/auth', require('./api/authAPI'));
app.use('/api/queue', require('./api/queueAPI'));
app.use('/api/room', require('./api/roomAPI'));

server.listen(process.env.PORT || 5000);
console.log(`Server has started: 5000`);
module.exports = { io };
