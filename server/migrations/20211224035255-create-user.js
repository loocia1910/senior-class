'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login_id: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      nick_name: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      birth: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      profile_url: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};