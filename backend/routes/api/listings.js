const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { findCurrentUser } = require('../../utils/auth');
const ImagesRepository = require('../../db/images-repository')

// const { getUserToken } = require("../auth");

const { Listing, Image } = require('../../db/models');
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
    include: {
      model: Image,
    }
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
    }
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
    serviceFee
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
    serviceFee
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

router.post('/:id(\\d+)/images', asyncHandler(async function (req, res, next) {
  if (req.body.newImages) {
    req.body.newImages.forEach(async item => {
      await Image.create(item);
    })
    return res.json(req.body.newImages);
  } else {
    req.body.imageURLs.forEach(async item => {
      await Image.create(item);
    })
    return res.json(req.body.imageURLs);
  }
}));

router.put('/:id(\\d+)/images', asyncHandler(async function (req, res, next) {
  req.body.updatedPhotos.forEach(async item => {
    await Image.update(item, {
      where: { id: item.id }
    })
  })
  return res.json(req.body.updatedPhotos);
}));
module.exports = router;