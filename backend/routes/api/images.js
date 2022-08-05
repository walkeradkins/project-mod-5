const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { findCurrentUser } = require('../../utils/auth');

const { Listing, Image } = require('../../db/models');
const router = express.Router();

router.delete('/:id(\\d+)', asyncHandler(async function (req, res) {
  const id = parseInt(req.params.id);
  console.log('---------------', id)
  const image = await Image.findByPk(id);
  if (image) {
    await image.destroy();
    return res.json(image)
  } else {
    throw new Error('Listing not found')
  }
}));

module.exports = router;
