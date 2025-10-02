'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('brends',
      [
          {id:"1",naziv:"Iphone"},
          {id:"2",naziv:"Samsung"},
          {id:"3",naziv:"Huawei"},
          {id:"4",naziv:"Alcatel"},
          {id:"5",naziv:"Xiaomi"},
          {id:"6",naziv:"Honor"}
      ]);
      
    },
  
    async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Brendovi', null, {});
    }
  };
  