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

const PlanSchema = new Schema({
  title: String,
  asans: [{ type: Schema.Types.ObjectId, ref: 'asana'}]
})

const Asana = mongoose.model('asana', AsanaSchema);
const Plan = mongoose.model('plan', PlanSchema);

module.exports = Asana;