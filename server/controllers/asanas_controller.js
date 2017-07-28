const AWS = require('aws-sdk');
const shortid = require('shortid');

const Asana = require('../models/asana');

const keys = require('../config/keys.json');

const s3 = new AWS.S3();
// s3.config.loadFromPath('./creditinals');
s3.config.update(
  {
    "accessKeyId": keys.accessKeyId,
    "secretAccessKey": keys.secretAccessKey
  });

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
  },

  uploadImage(req, res) {
    const name = shortid.generate();
    s3.putObject({
      Bucket: 'img.yoga.indiana108.ru',
      Key: `${name}.jpg`, 
      Body: req.file.buffer,
      ACL: 'public-read', // your permisions  
    }, (err) => { 
      if (err) {
        console.log(err);
        return res.status(400).send(err)
      };
      
      res.send(name);
    })
  }
      

}