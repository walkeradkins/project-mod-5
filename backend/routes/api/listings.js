const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { findCurrentUser } = require('../../utils/auth');

// const { getUserToken } = require("../auth");

const { Listing } = require('../../db/models');
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
  const listings = await Listing.findAll()
  return res.json(listings);
}));

router.post('/', validateListing, asyncHandler(async function (req, res, next) {
  const currentUser = findCurrentUser(req);

  const {
    address,
    city,
    state,
    country,
    name,
    price
  } = req.body;

  const listing = await Listing.create({
    userId: currentUser.id,
    address,
    city,
    state,
    country,
    name,
    price
  });
  return res.json(listing);
}));

router.put('/:id', validateListing, asyncHandler(async function (req, res, next) {
  const id = parseInt(req.params.id);
   await Listing.update(req.body, {
    where: { id }
  });
  const listing = await Listing.findByPk(id);
  return res.json(listing);
}))

router.delete('/:id', asyncHandler(async function (req, res) {
  const id = parseInt(req.params.id);
  const listing = await Listing.findByPk(id);
  if (listing) {
    await listing.destroy();
    return res.json(listing.id)
  } else {
    throw new Error('Listing not found')
  }
}));

module.exports = router;