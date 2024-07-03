const mongoose = require('mongoose');

const TaskScheme = mongoose.Schema({
  _id: String,
  name: String,
  completed: Boolean
});

module.exports = TaskScheme;
