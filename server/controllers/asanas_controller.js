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
      

}