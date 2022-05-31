const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { findCurrentUser } = require('../../utils/auth');

const { Listing, Image } = require('../../db/models');

router.post('/', validateListing, asyncHandler(async function (req, res, next) {
  const currentUser = findCurrentUser(req);

  const {
    url
  } = req.body;

  const listing = await Listing.create({
    userId: currentUser.id,
    url
  });
  return res.json(listing);
}));

module.exports = router;
