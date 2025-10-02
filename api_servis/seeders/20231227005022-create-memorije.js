'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('memorijas',
    [
        {id:"1",velicina:"64 GB"},
        {id:"2",velicina:"128 GB"},
        {id:"3",velicina:"256 GB"},
        {id:"4",velicina:"512 GB"},
        {id:"5",velicina:"1 T"},
        {id:"6",velicina:"2 T"}
    ]);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Memorije', null, {});
  }
};