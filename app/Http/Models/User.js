const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../../../database/database.js"); // Adjust the path to your Sequelize instance

const User = sequelize.define(
  "User",
  {
    ID: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      field: "ID", // This maps the model attribute to the database column
    },
    user_login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_nicename: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    user_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_registered: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_activation_key: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "wp4d_users", // Ensure this matches the table name
    timestamps: false, // WordPress does not use Sequelize-style timestamps
  }
);

module.exports = User;
