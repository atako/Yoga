const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
var config = require('./config/config');
const app = express();

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(config.atlas);
}


app.use(bodyParser.json());
  routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err._message });
});

module.exports = app;