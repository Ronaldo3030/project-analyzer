const database = require('../models');
module.exports = class TasksController {
  static async getAllTasks(req, res) {
    try {
      const allTasks = await database.Tasks.findAll();
      return res.status(200).json(allTasks);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getAllTasksByDateAsc(req, res) {
    try {
      const allTasks = await database.Tasks.findAll({
        order: [
          ['conclusion', 'ASC']
        ]
      });
      return res.status(200).json(allTasks);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getAllTasksByDateDesc(req, res) {
    try {
      const allTasks = await database.Tasks.findAll({
        order: [
          ['conclusion', 'DESC']
        ]
      });
      return res.status(200).json(allTasks);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getOneTask(req, res) {
    const { id } = req.params;

    try {
      const task = await database.Tasks.findOne({ where: { id: Number(id) } });
      return res.status(200).json(task);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async registeTask(req, res) {
    const data = req.body;

    try {
      const newTask = await database.Tasks.create(data);
      return res.status(200).json(newTask);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateTask(req, res) {
    const { id } = req.params;
    const data = req.body;

    try {
      await database.Tasks.update(data, { where: { id: Number(id) } });
      const task = await database.Tasks.findOne({ where: { id: Number(id) } });
      return res.status(200).json(task);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteTask(req, res) {
    const { id } = req.params;

    try {
      await database.Tasks.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: "Success" });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}