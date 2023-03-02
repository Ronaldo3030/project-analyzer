module.exports = class ProjectsController {
  static async getAllProjects(req, res) {
    return res.status(200).json({ message: "Success" });
  }
}