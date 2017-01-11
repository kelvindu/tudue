var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
});

var Todos = mongoose.model('list_todo',todoSchema);

module.exports = Todos;
