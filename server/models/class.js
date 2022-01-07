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
      this.belongsTo(models.User);
      this.hasMany(models.Class_course);
      this.hasMany(models.Review);
      this.belongsToMany(models.User, { through: 'like_classes'})
      this.belongsToMany(models.User, { through: 'ordered_classes'})
      this.belongsTo(models.User, { through: 'opened_classes'})
    }
  };
  Class.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    score: DataTypes.DECIMAL,
    discount: DataTypes.INTEGER,
    img_url: DataTypes.STRING,
    contents: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};