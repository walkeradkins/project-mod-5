'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Bookings', [
     {
      userId: 1,
      listingId: 1,
      startDate: '2022-05-06',
      endDate: '2022-05-09'
     },
     {
      userId: 2,
      listingId: 2,
      startDate: '2022-05-06',
      endDate: '2022-05-09'
     },
     {
      userId: 3,
      listingId: 3,
      startDate: '2022-05-06',
      endDate: '2022-05-09'
     }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
