const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AsanaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  duration: String,
  footDistance: String,
  footPosition: String,
  image: String
});

const Asana = mongoose.model('asana', AsanaSchema);

module.exports = Asana;