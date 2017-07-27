const multer = require('multer');

const AsanasController = require('../controllers/asanas_controller');
const PlanController = require('../controllers/plans_controller');

const upload = multer({
  storage: multer.memoryStorage(),
  // file size limitation in bytes
  limits: { fileSize: 52428800 },
});

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
  app.post('/upload', upload.single('theseNamesMustMatch'), AsanasController.uploadImage);
  app.get('/api/findplan/:id', PlanController.findPlan);
};