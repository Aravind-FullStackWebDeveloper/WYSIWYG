// backend/models/Design.js
const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: Object, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Design', designSchema);
