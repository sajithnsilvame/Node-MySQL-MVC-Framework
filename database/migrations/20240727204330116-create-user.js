"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("wp4d_users", {
      ID: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_login: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      user_pass: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      user_nicename: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      user_email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      user_url: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      user_registered: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      user_activation_key: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      user_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      display_name: {
        type: Sequelize.STRING(250),
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("wp4d_users");
  },
};
