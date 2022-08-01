const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { singleMulterUpload, singlePublicFileUpload } = require( '../../awsS3');
const { User } = require('../../db/models');
const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('firstName')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a first name with at least 1 character.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a last name with at least 1 character.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

router.get('/', asyncHandler(async (_req, res) => {
  const users = await User.findAll();
  return res.json(users)
}))

router.post(
  '/',
  singleMulterUpload("image"),
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    let profileImageUrl;
    if (req.file) {
      profileImageUrl = await singlePublicFileUpload(req.file)
    } else {
      profileImageUrl = null;
    }
    const user = await User.signup({ email, firstName, lastName, password, profileImageUrl });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

module.exports = router;