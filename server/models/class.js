'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Class_like, { foreignKey: 'classId' });
      this.hasMany(models.Review, { foreignKey: 'classId' });
      this.belongsTo(models.User, { foreignKey: 'teacherId' }); 
    }
  };
  Class.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    img_url: DataTypes.STRING,
    category: DataTypes.STRING,
    contents: DataTypes.STRING,
    teacherInfo: DataTypes.STRING,
    region: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};