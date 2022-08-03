'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      },
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50]
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 150]
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 2000]
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coordinates: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amenities: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 2000]
      },
    },
    guests: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    beds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    baths: {
      type: DataTypes.FLOAT(1, 1),
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMERIC,
      allowNull: false
    },
    cleaningFee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    serviceFee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Listing.associate = function (models) {
    Listing.belongsTo(models.User, { foreignKey: 'userId' })
    Listing.hasMany(models.Booking, { foreignKey: 'listingId', onDelete: 'CASCADE', hooks: true })
    Listing.hasMany(models.Image, { foreignKey: 'listingId', onDelete: 'CASCADE', hooks: true })
    Listing.hasMany(models.Review, { foreignKey: 'listingId', onDelete: 'CASCADE', hooks: true })
  };
  return Listing;
};