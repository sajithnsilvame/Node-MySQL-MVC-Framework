const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../../database/database.js"); // Adjust the path to your Sequelize instance

const Category = sequelize.define(
  "Category",
  {
    term_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    term_group: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "wp4d_terms", // Ensure this matches your WordPress table name
    timestamps: false,
  }
);

module.exports = Category;
