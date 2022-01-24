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
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        // 원ㄹ래는 대문자 였음 UserId, ClassId
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        classId: {
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
