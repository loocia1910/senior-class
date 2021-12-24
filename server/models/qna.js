'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QnA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsTo(models.Class);
    }
  };
  QnA.init({
    q_contents: DataTypes.STRING,
    q_create_at: DataTypes.DATE,
    a_contents: DataTypes.STRING,
    a_created_at: DataTypes.DATE,
    class_id: DataTypes.INTEGER,
    q_id: DataTypes.INTEGER,
    a_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QnA',
  });
  return QnA;
};