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
    await queryInterface.addColumn(
      'Classes', 
      'regionId', 
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Regions', 
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
    // Class course Table
    await queryInterface.addColumn(
      'Class_courses', // name of Source model
      'classId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Classes', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
    // QnA Table
    await queryInterface.addColumn(
      'QnAs', 
      'qId', 
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
    await queryInterface.addColumn(
      'QnAs', 
      'aId', 
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
    await queryInterface.addColumn(
      'QnAs', 
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
    // Review img Table
    await queryInterface.addColumn(
      'Review_imgs', 
      'reviewId', 
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Reviews', 
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
    // Opened Class Table
    await queryInterface.addColumn(
      'Opened_classes', 
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
      'Opened_classes', 
      'teacherId', 
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
      'Class_courses', 
      'classId' 
    );
    await queryInterface.removeColumn(
      'QnAs', 
      'aId' 
    );
    await queryInterface.removeColumn(
      'QnAs', 
      'qId' 
    );
    await queryInterface.removeColumn(
      'QnAs', 
      'classId' 
    );
    await queryInterface.removeColumn(
      'Classes', 
      'regionId', 
    );
    await queryInterface.removeColumn(
      'Reviews', 
      'classId'
    );
    await queryInterface.removeColumn(
      'Reviews', 
      'userId', 
    );
    await queryInterface.removeColumn(
      'Review_imgs', 
      'reviewId',
    );
    await queryInterface.removeColumn(
      'Opened_classes', 
      'classId', 
    );
    await queryInterface.removeColumn(
      'Opened_classes', 
      'teacherId', 
    );
  }
};
