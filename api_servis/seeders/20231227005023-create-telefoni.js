'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('telefons',
    [
        {id:"1",naziv:"11 Pro", opis:"Unapredjena kamera serije 11", cena:880, kolicina:18, brend_id:1, memorija_id:3},
        {id:"2",naziv:"One Touch", opis:"Model sa novim kvalitetom zvuka", cena:360, kolicina:34, brend_id:4, memorija_id:1}
    ]);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Telefoni', null, {});
  }
};
