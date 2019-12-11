const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'offline',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    default: 'Student',
  },
  like: {
    type: Number,
    default: 0,
  },
  subject: [{ name: String }],
});

// eslint-disable-next-line no-undef
module.exports = User = mongoose.model('user', UserSchema);
