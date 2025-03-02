const express = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/userControllers');

const router = express.Router();

router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    check('phone_number', 'Phone number is required').not().isEmpty(),
    check('gender', 'Gender is required').not().isEmpty(),
    check('date_of_birth', 'Date of birth is required').not().isEmpty(),
    check('membership_status', 'Membership status is required').not().isEmpty(),
  ],
  registerUser
);

router.post(
  '/signup',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  registerUser
);

router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  loginUser
);

module.exports = router;