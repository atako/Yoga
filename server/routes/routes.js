const AsanasController = require('../controllers/asanas_controller');
const PlanController = require('../controllers/plans_controller');

module.exports = (app) => {
  app.get('/api', AsanasController.greeting);
  app.get('/api/asans', AsanasController.getAsansList);
  app.post('/api/asans', AsanasController.create);
  app.delete('/api/asans/:id', AsanasController.deleteAsana);
  app.get('/api/asans/:id', AsanasController.getAsana);
  app.post('/api/asans/edit/:id', AsanasController.updateAsana);
  app.get('/api/plan', PlanController.getPlanList);
  app.post('/api/plan', PlanController.createPlan);
  app.get('/api/plan/:id', PlanController.getPlan);
  app.post('/api/plan/:id', PlanController.updatePlan);
};