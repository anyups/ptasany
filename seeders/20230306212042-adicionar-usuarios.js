'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('usuarios'/*nome da tabela*/, [{
        nome: 'John Doe'//atributo
      }], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
