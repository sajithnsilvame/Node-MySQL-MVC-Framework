const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../../database/database.js"); // Adjust the path to your Sequelize instance

const Post = sequelize.define(
  "Post",
  {
    ID: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    post_author: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    post_date_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_excerpt: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    post_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },
    comment_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "open",
    },
    ping_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "open",
    },
    post_password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    post_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    to_ping: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pinged: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    post_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    post_modified_gmt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    post_content_filtered: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    post_parent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    guid: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    menu_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    post_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "post",
    },
    post_mime_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    comment_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "wp4d_posts", // Ensure this matches your WordPress table name
    timestamps: false, // WordPress does not use Sequelize-style timestamps
  }
);

module.exports = Post;
