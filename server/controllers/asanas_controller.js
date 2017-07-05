const Asana = require('../models/asana');

module.exports = {
  greeting(req, res) {
    console.log('working');
    res.send({ hi: 'there' });
  },

  getAsansList(req, res) {
    Asana.find({})
      .then(list => res.send(list))
  },

  create(req, res, next) {
    const asanaProps = req.body;
    
    Asana.create(asanaProps)
      .then(asana => res.send(asana))
      .catch(next);
  },

  deleteAsana(req, res) {
    Asana.findByIdAndRemove(req.params.id)
      .then(result => res.status(204).send(result))

  },

  updateAsana(req, res) {
    Asana.findByIdAndUpdate(req.params.id, req.body)
      .then(() => Asana.findById(req.params.id))
      .then(asana => res.send(asana))
  },

  getAsana(req, res) {
    Asana.findById(req.params.id)
      .then(asana => res.send(asana))
  }
      

}