const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const { findCurrentUser } = require('../../utils/auth');

// const { getUserToken } = require("../auth");

const { Booking, Image, Listing } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (_req, res) => {
  const currentUser = findCurrentUser(_req);
  const bookings = await Booking.findAll({
    where: { userId: currentUser.id },
  })
  return res.json(bookings);
}));

router.post('/', asyncHandler(async function (req, res) {
  // const currentUser = findCurrentUser(req);
  const {
    userId,
    listingId,
    startDate,
    endDate,
    totalDays,
    totalPrice,
    totalGuests
  } = req.body;

  const booking = await Booking.create({
    userId,
    listingId,
    startDate,
    endDate,
    totalDays,
    totalPrice,
    totalGuests
  });

  return res.json(booking);
}));

router.put('/:id', asyncHandler(async function (req, res) {
  const id = parseInt(req.params.id);
   await Booking.update(req.body, {
    where: { id }
  });
  const booking = await Booking.findByPk(id);
  return res.json(booking);
}));

router.delete('/:id', asyncHandler(async function (req, res) {
  const id = parseInt(req.params.id);
  const booking = await Booking.findByPk(id);
  if (booking) {
    await booking.destroy();
    return res.json(booking.id)
  } else {
    throw new Error('Booking not found')
  }
}));
module.exports = router;
