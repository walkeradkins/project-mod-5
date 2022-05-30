'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Listing, { foreignKey: 'listingId' });
  };
  return Image;
};