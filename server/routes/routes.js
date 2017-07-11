const AsanasController = require('../controllers/asanas_controller');

module.exports = (app) => {
  app.get('/api', AsanasController.greeting);
  app.get('/api/asans', AsanasController.getAsansList);
  app.post('/api/asans', AsanasController.create);
  app.delete('/api/asans/:id', AsanasController.deleteAsana);
  app.get('/api/asans/:id', AsanasController.getAsana);
  app.post('/api/asans/edit/:id', AsanasController.updateAsana);
  app.get('/api/plan/:id', PlanController.getList);
};