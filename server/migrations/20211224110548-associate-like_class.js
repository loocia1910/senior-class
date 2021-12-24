'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
       'like_classes', 
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        UserId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        ClassId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('like_classes');
  }
};
