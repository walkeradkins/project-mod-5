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