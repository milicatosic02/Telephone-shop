'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Narudzbinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vreme_narucivanja: {
        type: Sequelize.DATE
      },
      zakazano_vreme: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      adresa: {
        type: Sequelize.STRING
      },
      broj_telefona: {
        type: Sequelize.STRING
      },
      ime_prezime: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Narudzbinas');
  }
};