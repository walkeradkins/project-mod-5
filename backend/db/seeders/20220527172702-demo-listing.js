'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Listings', [
    {
      userId: 1,
      address: '1000 Main St.',
      city: 'Austin',
      state: 'Texas',
      country: 'USA',
      name: 'Garden Villa',
      price: 550,
      cleaningFee: 50,
      serviceFee: 100
    },
    {
      userId: 2,
      address: '123 Mariposa Dr.',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'Mexico',
      name: 'Rooftop apartment with pool!',
      price: 120,
      cleaningFee: 45,
      serviceFee: 150
    },
    {
      userId: 3,
      address: '345 Algarita',
      city: 'Los Angeles',
      state: 'California',
      country: 'USA',
      name: 'Desert Hideout ',
      price: 95,
      cleaningFee: 35,
      serviceFee: 95
    },
    {
      userId: 3,
      address: '66 Mountain rd.',
      city: 'Bend',
      state: 'Oregon',
      country: 'USA',
      name: 'Welcome to my mountain retreat!',
      price: 250,
      cleaningFee: 55,
      serviceFee: 80
    },
    {
      userId: 3,
      address: '12 Paso tr.',
      city: 'Canggu',
      state: 'Bali',
      country: 'Indonesia',
      name: 'Jungle home surrounded by nature!',
      price: 55,
      cleaningFee: 20,
      serviceFee: 25
    },
    {
      userId: 4,
      address: '99 Wind Way',
      city: 'North Shore',
      state: 'Hawaii',
      country: 'USA',
      name: 'Steps from the beach! Wonderful natural light',
      price: 120,
      cleaningFee: 200,
      serviceFee: 25
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Listings', null, {});
  }
};
