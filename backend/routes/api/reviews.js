const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models');

const router = express.Router();

router.put('/:id(\\d+)', asyncHandler(async function (req, res, next) {
  const id = parseInt(req.params.id);
  await Review.update(req.body, {
    where: { id }
  });
  const review = await Review.findByPk(id);
  return res.json(review);
}))

router.delete('/:id(\\d+)', asyncHandler(async function (req, res) {
  const id = parseInt(req.params.id);
  const review = await Review.findByPk(id);
  if (review) {
    await review.destroy();
    return res.json(review.id)
  } else {
    throw new Error('Listing not found')
  }
}));

module.exports = router;
