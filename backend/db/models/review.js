'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stars: {
      type: DataTypes.FLOAT(1, 2),
      allowNull: false
    },
    cleanliness: {
      type: DataTypes.FLOAT(1, 2),
      allowNull: false
    },
    communication: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    checkin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accuracy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 500]
      },
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100]
      },
    }
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Listing, { foreignKey: 'listingId' });
  };
  return Review;
};