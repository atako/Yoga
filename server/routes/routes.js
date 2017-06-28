const AsanasController = require('../controllers/asanas_controller');

module.exports = (app) => {
  app.get('/api', AsanasController.greeting);
  app.get('/api/asans', AsanasController.getAsansList);
  app.post('/api/asans', AsanasController.create);
};