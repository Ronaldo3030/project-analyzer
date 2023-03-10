'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tasks.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
    conclusion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};