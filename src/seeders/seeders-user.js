'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'example@example.com',
        firstName: 'Doe',
        lastName: 'sk',
        passWord: '12345',
        gender: 1,
        phoneNumber: '9378494',
        typeRole: 'ROLE',
        keyRole: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
