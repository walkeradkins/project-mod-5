const { Image } = require('./models');

async function findImagesByListingId(listingId) {
  return await Image.findAll({
    where: {
      listingId,
    },
  });
}

module.exports = {
  findImagesByListingId
}