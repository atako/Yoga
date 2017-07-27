const Plan = require('../models/plan');
const Asana = require('../models/asana');

module.exports = {

  getPlanList(req, res) {
    Plan.find({})
      .then(list => res.send(list));
  },

  createPlan(req, res) {
    Plan.create(req.body)
      .then(plan => res.send(plan));
  },
  
  getPlan(req, res) {
    Plan.findById(req.params.id)
      .populate('asans')
      .then(plan => res.send(plan));
  },

  findPlan(req, res) {
    Plan.find({alias: req.params.id})
      .populate('asans')
      .then(plan => res.send(plan[0]));
  },

  updatePlan(req, res) {
    const asans = req.body;

    Plan.findById(req.params.id)
      .then(plan => {
        asans.map(value => {
          plan.asans.push(value)
        });
        return plan;
      })
      .then(plan => plan.save())
      .then(plan => res.send(plan))
  },
}