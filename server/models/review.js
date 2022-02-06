'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo( models.User, { foreignKey: 'userId' } )
      this.belongsTo( models.Class, { foreignKey: 'classId' } )
    }
  };
  Review.init({
    contents: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};