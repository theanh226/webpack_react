const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const faker = require('faker');
const { check, validationResult } = require('express-validator');

const config = require('../config/default');

const router = express.Router();
const User = require('../models/user');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters',
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, code } = req.body;
    try {
      let user = await User.findOne({ email });
      // fake data
      const avatar = faker.image.avatar();
      const like = faker.random.number(100);
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      if (code === 'unitutor') {
        user = new User({
          name,
          email,
          password,
          type: 'Tutor',
          avatar,
          like,
        });
      } else {
        user = new User({
          name,
          email,
          password,
          avatar,
        });
      }

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
          type: user.type,
        },
      };

      jwt.sign(
        payload,
        config.jwtSecret,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        },
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  },
);

module.exports = router;
