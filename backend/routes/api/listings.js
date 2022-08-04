const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { findCurrentUser } = require('../../utils/auth');
const ImagesRepository = require('../../db/images-repository');
const { multipleMulterUpload, singleMulterUpload, multiplePublicFileUpload } = require('../../awsS3');



const { Listing, Image, Review, Booking } = require('../../db/models');
const router = express.Router();

const validateListing = [
  check('address')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an address')
    .isLength({ max: 50 })
    .withMessage('Please keep address within 50 characters'),
  check('city')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a city')
    .isLength({ max: 50 })
    .withMessage('Please keep city within 50 characters'),
  check('state')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a state/province')
    .isLength({ max: 50 })
    .withMessage('Please keep state/province within 50 characters'),
  check('country')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a country')
    .isLength({ max: 50 })
    .withMessage('Please keep country within 50 characters'),
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a descriptive name')
    .isLength({ max: 150 })
    .withMessage('Please keep address within 150 characters'),
  check('price')
    .exists({ checkFalsey: true })
    .withMessage('Please provide a nightly rate'),
  handleValidationErrors
];

router.get('/', asyncHandler(async (_req, res) => {
  const listings = await Listing.findAll({
    include: [Image, Review]
  })
  return res.json(listings);
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const listing = await Listing.findByPk(id, {
    include: {
      model: Image,
      where: {
        listingId: id
      }
    },
  });
  return res.json(listing);
}));



router.post('/', validateListing, asyncHandler(async function (req, res, next) {
  const currentUser = findCurrentUser(req);

  const {
    address,
    city,
    state,
    country,
    name,
    price,
    cleaningFee,
    serviceFee,
    description,
    type,
    guests,
    coordinates,
    bedrooms,
    beds,
    baths,
    amenities
  } = req.body;

  const listing = await Listing.create({
    userId: currentUser.id,
    address,
    city,
    state,
    country,
    name,
    price,
    cleaningFee,
    serviceFee,
    description,
    type,
    coordinates,
    guests,
    bedrooms,
    beds,
    baths,
    amenities,
  });
  return res.json(listing);
}));

router.put('/:id(\\d+)', validateListing, asyncHandler(async function (req, res, next) {
  const id = parseInt(req.params.id);
  await Listing.update(req.body, {
    where: { id }
  });
  const listing = await Listing.findByPk(id);
  return res.json(listing);
}))

router.delete('/:id(\\d+)', asyncHandler(async function (req, res) {
  const id = parseInt(req.params.id);
  const listing = await Listing.findByPk(id);
  if (listing) {
    await listing.destroy();
    return res.json(listing.id)
  } else {
    throw new Error('Listing not found')
  }
}));

router.post('/:id(\\d+)/images',
  multipleMulterUpload("images"),
  asyncHandler(async function (req, res, next) {
    const id = parseInt(req.params.id);
    const images = await multiplePublicFileUpload(req.files)
    images.forEach(async item => {
      await Image.create({
        url: item,
        listingId: id
      });
    })
    return res.json(images);
  }));

router.put('/:id(\\d+)/images', asyncHandler(async function (req, res, next) {
  req.body.updatedPhotos.forEach(async item => {
    await Image.update(item, {
      where: { id: item.id }
    })
  })
  return res.json(req.body.updatedPhotos);
}));

router.post('/:id(\\d+)/review', asyncHandler(async function (req, res, next) {
  const {
    userId,
    listingId,
    stars,
    cleanliness,
    communication,
    checkin,
    accuracy,
    location,
    value,
    description,
    date
  } = req.body

  const review = await Review.create({
    userId,
    listingId,
    stars,
    cleanliness,
    communication,
    checkin,
    accuracy,
    location,
    value,
    description,
    date
  })
  return res.json(review);
}));

module.exports = router;
