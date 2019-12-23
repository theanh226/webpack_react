const express = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../models/user');

const router = express.Router();
const auth = require('../middleware/checkAuth');

// @route    GET api/room/
// @desc     Get room tutor available
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const roomTutor = await User.find({
      roomStatus: 'on',
    }).sort({ timeToQueue: 1 });
    if (!roomTutor) {
      return res.status(400).json({
        errors: [{ msg: 'No Tutor Room in Queue' }],
      });
    }
    res.send(roomTutor);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route    POST api/room/open/
// @desc     create room and change room status to on
// @access   private
router.post(
  '/open',
  [
    check('room', 'room number is required')
      .not()
      .isEmpty(),
    check('room', 'Please enter a room number with 3 or more number').isLength({
      min: 3,
    }),
  ],
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { room } = req.body;
    try {
      const existRoom = await User.findOne({ room });
      if (req.user.type === 'Tutor' && existRoom === null) {
        await User.findOneAndUpdate(
          { _id: req.user.id },
          {
            $set: {
              roomStatus: 'on',
              room,
            },
          },
          {
            useFindAndModify: false,
          },
        );
        res.json({
          success: true,
          msg: 'room available',
        });
      } else {
        res.status(400).json({
          errors: [{ msg: 'Room already exists' }],
        });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },
);

// @route    POST api/room/on/
// @desc     change room status to on
// @access   private
router.post('/on/:roomNumber', auth, async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { room: req.params.roomNumber },
      {
        $set: {
          roomStatus: 'on',
        },
      },
      {
        useFindAndModify: false,
      },
    );
    res.json({
      success: true,
      msg: 'room available',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    POST api/room/in-chat/:id
// @desc     change room status to in chat
// @access   private
router.post('/in-chat/:id', auth, async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          roomStatus: 'in chat',
        },
      },
      {
        useFindAndModify: false,
      },
    );
    res.json({
      success: true,
      msg: 'room status: in chat',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    POST api/room/close/
// @desc     change room status to off
// @access   private
router.post('/close', auth, async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $set: {
          roomStatus: 'off',
          room: -1,
        },
      },
      {
        useFindAndModify: false,
      },
    );
    res.json({
      success: true,
      msg: 'room status: off',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
