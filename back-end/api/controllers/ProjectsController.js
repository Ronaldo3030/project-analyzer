const database = require('../models');
module.exports = class ProjectsController {
  static async getAllProjects(req, res) {
    try {
      const allProjects = await database.Projects.findAll();
      return res.status(200).json(allProjects);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getOneProject(req, res) {
    const { id } = req.params;

    try {
      const project = await database.Projects.findOne({ where: { id: Number(id) } });
      return res.status(200).json(project);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async registeProject(req, res) {
    const data = req.body;

    try {
      const newProject = await database.Projects.create(data);
      return res.status(200).json(newProject);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateProject(req, res) {
    const { id } = req.params;
    const data = req.body;

    try {
      await database.Projects.update(data, { where: { id: Number(id) } });
      const project = await database.Projects.findOne({ where: { id: Number(id) } });
      return res.status(200).json(project);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteProject(req, res) {
    const { id } = req.params;

    try {
      await database.Projects.destroy({ where: { id: Number(id) } });
      return res.status(200).json({message: "Success"});
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}