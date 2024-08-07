"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: "john.doe@example.com",
          password: "hashedpassword123", // Remember to hash passwords in real applications
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane Smith",
          email: "jane.smith@example.com",
          password: "hashedpassword456", // Remember to hash passwords in real applications
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more entries as needed
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // Commands to revert seed here.
    await queryInterface.bulkDelete("Users", null, {});
  },
};
