const fs = require("fs/promises");
const path = require("path");

const args = process.argv.slice(2);
const modelName = args[0];
const createMigration = args.includes("-m") || args.includes("--m");

if (!modelName) {
  console.error("Please provide a model name.");
  process.exit(1);
}

console.log(`Model Name: ${modelName}`);
console.log(`Create Migration: ${createMigration}`);

const modelsDir = path.join(process.cwd(), "app", "Http", "Models");
const migrationsDir = path.join(process.cwd(), "database", "migrations");
const modelFilePath = path.join(modelsDir, `${modelName}.js`); // Changed to .js
const relativeModelFilePath = path.relative(process.cwd(), modelFilePath);

(async () => {
  try {
    // Check if the model file already exists
    const exists = await fs
      .access(modelFilePath)
      .then(() => true)
      .catch(() => false);
    if (exists) {
      console.log(`Model "${modelName}" already exists.`);
      process.exit(0);
    }

    // Model template
    const modelTemplate = `const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js'); // Adjust the path to your Sequelize instance

const ${modelName} = sequelize.define('${modelName}', {
  // Define your schema fields here
  // Example: 
  // name: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
}, {
  tableName: '${modelName.toLowerCase()}s', // Adjust the table name if needed
  timestamps: true,
});

module.exports = ${modelName};
`;

    // Ensure the models directory exists
    await fs.mkdir(modelsDir, { recursive: true });

    // Write model file
    await fs.writeFile(modelFilePath, modelTemplate);
    console.log(
      `"${modelName}" model created successfully. < ${relativeModelFilePath} >`
    );

    // Create a migration file if the '--m' or '-m' flag is present
    if (createMigration) {
      console.log("Creating migration file...");
      const timestamp = new Date().toISOString().replace(/[-T:\.Z]/g, "");
      const migrationFileName = `${timestamp}-create-${modelName.toLowerCase()}.js`; // Changed to .js
      const migrationFilePath = path.join(migrationsDir, migrationFileName);

      const migrationTemplate = `'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('${modelName.toLowerCase()}s', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      // Define other columns here
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('${modelName.toLowerCase()}s');
  }
};
`;

      // Ensure the migrations directory exists
      await fs.mkdir(migrationsDir, { recursive: true });

      // Write migration file
      await fs.writeFile(migrationFilePath, migrationTemplate);
      console.log(
        `Migration for "${modelName}" created successfully at < ${migrationFilePath} >.`
      );
    } else {
      console.log("Migration flag not set, skipping migration creation.");
    }
  } catch (err) {
    console.error("Error creating model or migration:", err);
  }
})();
