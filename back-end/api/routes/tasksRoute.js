const { Router } = require('express');
const TasksController = require('../controllers/TasksController');

const router = Router();

router
  .get('/api/tasks', TasksController.getAllTasks)
  .get('/api/tasks/asc', TasksController.getAllTasksByDateAsc)
  .get('/api/tasks/desc', TasksController.getAllTasksByDateDesc)
  .get('/api/tasks/:id', TasksController.getOneTask)
  .post('/api/tasks', TasksController.registeTask)
  .put('/api/tasks/:id', TasksController.updateTask)
  .delete('/api/tasks/:id', TasksController.deleteTask)

module.exports = router;