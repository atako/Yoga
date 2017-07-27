const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
  title: String,
  alias: String,
  asans: [{ 
    type: Schema.Types.ObjectId,
    ref: 'asana'
  }]
});

const Plan = mongoose.model('plan', PlanSchema);

module.exports = Plan;