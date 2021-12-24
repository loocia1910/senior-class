'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Opened_class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
      this.belongsTo(models.Class);
    }
  };
  Opened_class.init({
    teacher_id: DataTypes.INTEGER,
    Class_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Opened_class',
  });
  return Opened_class;
};