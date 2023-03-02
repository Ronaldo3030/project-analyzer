const projects = require('./projectsRoute');

module.exports = app => {
  app.use(projects);
}