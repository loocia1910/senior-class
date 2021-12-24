'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class_course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Class_course.init({
    name: DataTypes.STRING,
    order: DataTypes.INTEGER,
    video_url: DataTypes.STRING,
    class_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Class_course',
  });
  return Class_course;
};