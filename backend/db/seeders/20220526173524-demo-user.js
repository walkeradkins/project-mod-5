'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        firstName: 'Demo',
        lastName: 'User',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        firstName: 'Ayden',
        lastName: 'Mann',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user2@user.io',
        firstName: 'Harmony',
        lastName: 'Long',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user3@user.io',
        firstName: 'Malcolm',
        lastName: 'Patel',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user4@user.io',
        firstName: 'Khalil',
        lastName: 'Watts',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user5@user.io',
        firstName: 'Gregory Petrson',
        lastName: 'Demo',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user6@user.io',
        firstName: 'Brayden',
        lastName: 'Reed',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      firstName: { [Op.in]: ['Brayden', 'Gregory', 'Khalil', 'Malcolm', 'Harmony', 'Ayden', 'Demo'] }
    }, {});
  }
};