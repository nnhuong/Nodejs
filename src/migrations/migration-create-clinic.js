'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // statusId: DataTypes.STRING,
    // doctorId: DataTypes.INTEGER,
    // patientId: DataTypes.STRING,
    // date: DataTypes.DATE,
    // timeType: DataTypes.STRING
    await queryInterface.createTable('clinics', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
 down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clinics');
  }
};