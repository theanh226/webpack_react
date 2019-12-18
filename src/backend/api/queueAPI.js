const express = require('express');
const User = require('../models/user');

const router = express.Router();
const auth = require('../middleware/checkAuth');

// @route    GET api/queue
// @desc     Get User in Queue
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    if (true) {
      const userInQueue = await User.find({
        status: 'In Queue',
      }).sort({ timeToQueue: 1 });
      if (!userInQueue) {
        return res.status(400).json({
          errors: [{ msg: 'No user in Queue' }],
        });
      }
      res.send(userInQueue);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route    POST api/queue/join-queue
// @desc     join to Queue
// @access   private
router.post('/join-queue/:id', auth, async (req, res) => {
  try {
    if (req.user.type === 'Student') {
      await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            status: 'In Queue',
            timeToQueue: Date.now(),
          },
        },
        {
          useFindAndModify: false,
        },
      );
      res.json({
        success: true,
        msg: 'You have been added to the queue',
      });
    } else {
      res.json({
        msg: 'you are not Student',
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    POST api/queue/leave-queue
// @desc     Leave to Queue
// @access   private
router.post('/leave-queue/:id', auth, async (req, res) => {
  try {
    const getUser = await User.findById({ _id: req.params.id });
    if (getUser.status === 'In Queue') {
      await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            status: 'Online',
          },
        },
        {
          useFindAndModify: false,
        },
      );
      if (req.user.type === 'Student') {
        res.json({
          success: true,
          msg: 'You have been leave from the queue',
        });
      } else {
        res.json({
          success: true,
          msg: 'You have successfully deleted the user from the queue',
        });
      }
    } else {
      if (req.user.type === 'Student') {
        res.status(400).json({
          errors: [{ msg: 'you are not in the queue' }],
        });
      } else {
        res.status(400).json({
          errors: [{ msg: 'The user is not in the queue' }],
        });
      }
      return;
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
