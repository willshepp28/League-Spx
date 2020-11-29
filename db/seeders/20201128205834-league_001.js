'use strict';

const getLeagues = require("../seed-data/Leagues.seed-data");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert("Leagues", getLeagues(Sequelize))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Leagues", null, {});
  }
};
