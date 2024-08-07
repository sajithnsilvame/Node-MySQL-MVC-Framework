"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("wp4d_posts", {
      ID: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      post_author: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      post_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      post_date_gmt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      post_content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      post_title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      post_excerpt: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      post_status: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: "publish",
      },
      comment_status: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: "open",
      },
      ping_status: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: "open",
      },
      post_password: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      post_name: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      to_ping: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      pinged: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      post_modified: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      post_modified_gmt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      post_content_filtered: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      post_parent: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      guid: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      menu_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      post_type: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: "post",
      },
      post_mime_type: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      comment_count: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("wp4d_posts");
  },
};
