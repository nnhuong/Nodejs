'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // statusId: DataTypes.STRING,
    // doctorId: DataTypes.INTEGER,
    // patientId: DataTypes.STRING,
    // date: DataTypes.DATE,
    // timeType: DataTypes.STRING
    await queryInterface.createTable('allcodes', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusId: {
        type: Sequelize.STRING
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      patientId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      timeType: {
        allowNull: false,
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
    await queryInterface.dropTable('allcodes');
  }
};