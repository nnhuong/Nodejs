'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // statusId: DataTypes.STRING,
    // doctorId: DataTypes.INTEGER,
    // patientId: DataTypes.STRING,
    // date: DataTypes.DATE,
    // timeType: DataTypes.STRING
    await queryInterface.createTable('doctor_clinic_specialty', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      clinicId: {
        type: Sequelize.INTEGER
      },
      specialtyId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('doctor_clinic_specialty');
  }
};