'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bojas',
    [
        {id:"1",ime:"Crna"},
        {id:"2",ime:"Bela"},
        {id:"3",ime:"Siva"},
        {id:"4",ime:"Roze"},
        {id:"5",ime:"Ljubicasta"}
    ]);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Boje', null, {});
  }
};
