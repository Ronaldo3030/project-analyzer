'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    static associate(models) {
      // define association here
    }
  }
  Projects.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    conclusion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};