'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Class Table
    await queryInterface.addColumn(
      'Classes', // name of Source model
      'teacherId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
    // Reviews Table
    await queryInterface.addColumn(
      'Reviews', 
      'classId', 
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Classes', 
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
    await queryInterface.addColumn(
      'Reviews', 
      'userId', 
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', 
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Classes', // name of Source model
      'teacherId' // key we want to remove
    );
    await queryInterface.removeColumn(
      'Reviews', 
      'classId'
    );
    await queryInterface.removeColumn(
      'Reviews', 
      'userId', 
    );
  }
};
