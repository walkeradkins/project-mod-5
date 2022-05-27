const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const { findCurrentUser } = require('../../utils/auth');

// const { getUserToken } = require("../auth");

const { Booking } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (_req, res) => {
  const currentUser = findCurrentUser(_req);
  const bookings = await Booking.findAll({
    where: {
      userId: currentUser.id
    }
  })
  return res.json(bookings);
}));

router.post('/', asyncHandler(async function (req, res) {
  const currentUser = findCurrentUser(req);
  const {
    listingId,
    startDate,
    endDate,
  } = req.body;

  const booking = await Booking.create({
    userId: currentUser.id,
    listingId,
    startDate,
    endDate
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
  if (!booking) throw new Error('Cannot find booking');
  await Booking.destroy({ where: { id: booking.id }});
  return booking.id;
}));
module.exports = router;
