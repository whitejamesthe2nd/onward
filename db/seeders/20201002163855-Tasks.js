'use strict';
function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Tasks', [
        r({ userId: 1, projectId: 1,description: 'Make database schema'}),
        r({ userId: 1, projectId: 1, description: 'Make Restful endpoints for routes'}),
        r({ userId: 1, projectId: 1, description: 'Finish Auth'}),
        r({ userId: 1, projectId: 1, description: 'Apply CSS'}),
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
