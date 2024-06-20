'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Nguyen',
        lastName: 'Huong',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),}
    ]);
  },
  // down: (queryInterface, Sequelize) => {
  //   return queryInterface.bulkDelete('User', null, {});
  // },
};