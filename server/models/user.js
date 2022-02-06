'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      this.hasMany(models.Class_like, { foreignKey: "userId" });
      this.hasMany(models.Review, { foreignKey: "userId" });
      this.hasMany(models.Class, { foreignKey: "teacherId" });
    }
  };
  User.init({
    login_id: DataTypes.STRING,
    password: DataTypes.STRING,
    nickname: DataTypes.STRING,
    name: DataTypes.STRING,
    birth: DataTypes.STRING,
    gender: DataTypes.STRING,
    profile_url: DataTypes.STRING,
    is_teacher: DataTypes.STRING,
    info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};