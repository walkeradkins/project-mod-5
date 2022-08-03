'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users'}
      },
      address: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      coordinates: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(2000),
        allowNull: false,
      },
      amenities: {
        type: Sequelize.STRING(2000),
        allowNull: false,
      },
      price: {
        type: Sequelize.NUMERIC,
        allowNull: false,
      },
      cleaningFee: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      serviceFee: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      guests: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bedrooms: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      beds: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      baths: {
        type: Sequelize.FLOAT(1, 1),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Listings');
  }
};