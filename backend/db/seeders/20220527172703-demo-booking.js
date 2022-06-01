'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Bookings', [
     {
      userId: 1,
      listingId: 1,
      startDate: '2022-05-06',
      endDate: '2022-05-09',
      totalDays: 3,
      totalPrice: 1800,
      totalGuests: 2,
     },
     {
      userId: 2,
      listingId: 2,
      startDate: '2022-05-06',
      endDate: '2022-05-09',
      totalDays: 5,
      totalPrice: 795,
      totalGuests: 3,
     },
     {
      userId: 3,
      listingId: 3,
      startDate: '2022-05-06',
      endDate: '2022-05-09',
      totalDays: 4,
      totalPrice: 510,
      totalGuests: 5,
     }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
