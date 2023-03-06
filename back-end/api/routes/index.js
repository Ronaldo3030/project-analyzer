const projects = require('./projectsRoute');
const tasks = require('./tasksRoute');

module.exports = app => {
  app.use(tasks);
  app.use(projects);
}