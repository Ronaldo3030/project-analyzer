const { Router } = require('express');
const ProjectsController = require('../controllers/ProjectsController');

const router = Router();

router.
  get('/api/projects', ProjectsController.getAllProjects);

module.exports = router;