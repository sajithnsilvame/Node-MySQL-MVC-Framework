const fs = require("fs");
const path = require("path");
const sequelize = require("../../../database/database.js"); // Path to your Sequelize instance
const Sequelize = require("sequelize"); // Add Sequelize require if not already included

const basename = path.basename(__filename);
const models = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
