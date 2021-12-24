'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Class, { through: 'like_classes'})
      this.belongsToMany(models.Class, { through: 'ordered_classes'})
      this.belongsToMany(models.Class, { through: 'opened_classes'})
    }
  };
  User.init({
    login_id: DataTypes.STRING,
    password: DataTypes.STRING,
    nick_name: DataTypes.STRING,
    name: DataTypes.STRING,
    birth: DataTypes.STRING,
    gender: DataTypes.STRING,
    profile_url: DataTypes.STRING,
    admin: DataTypes.STRING,
    info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};