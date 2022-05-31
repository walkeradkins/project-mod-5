'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: {
      type:DataTypes.INTEGER,
      allowNull: false
     },
    address: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      },
     },
    city: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      },
     },
    state: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      },
     },
    country: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50]
      },
     },
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 150]
      },
     },
    price: {
      type:DataTypes.NUMERIC,
      allowNull: false
     }
  }, {});
  Listing.associate = function(models) {
    Listing.belongsTo(models.User, { foreignKey: 'userId' })
    Listing.hasMany(models.Booking, { foreignKey: 'listingId', onDelete: 'CASCADE', hooks: true })
    Listing.hasMany(models.Image, { foreignKey: 'listingId', onDelete: 'CASCADE', hooks: true })
  };
  return Listing;
};