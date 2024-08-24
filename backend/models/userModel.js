// backend/models/userModel.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user', 'stockManager'], required: true }
});

module.exports = mongoose.model('User', UserSchema);
