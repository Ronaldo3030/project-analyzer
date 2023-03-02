const { Router } = require('express');
const ProjectsController = require('../controllers/ProjectsController');

const router = Router();

router
  .get('/api/projects', ProjectsController.getAllProjects)
  .get('/api/projects/:id', ProjectsController.getOneProject)
  .post('/api/projects', ProjectsController.registeProject)
  .put('/api/projects/:id', ProjectsController.updateProject)
  .delete('/api/projects/:id', ProjectsController.deleteProject)

module.exports = router;