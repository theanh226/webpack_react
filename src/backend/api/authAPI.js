const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const config = require('../config/default');
const auth = require('../middleware/checkAuth');
const User = require('../models/user');

const router = express.Router();

// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', auth, async (req, res) => {
  try {
    // select('-password') that will leave off the password in the data.
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        email,
      });
      if (!user) {
        return res.status(400).json({
          errors: [
            {
              msg: 'Invalid Credentials',
            },
          ],
        });
      }

      if (user) {
        await User.findOneAndUpdate(
          { _id: user.id },
          {
            $set: {
              status: 'Online',
            },
          },
          {
            useFindAndModify: false,
          },
        );
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [
            {
              msg: 'Invalid Credentials',
            },
          ],
        });
      }

      const payload = {
        user: {
          id: user.id,
          type: user.type,
        },
      };

      jwt.sign(
        payload,
        config.jwtSecret,
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
          });
        },
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },
);
// @route    POST api/queue/join-queue
// @desc     join to Queue
// @access   private
router.post('/offline', auth, async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $set: {
          status: 'Offline',
        },
      },
      {
        useFindAndModify: false,
      },
    );
    res.json({
      msg: 'user status now offline',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
