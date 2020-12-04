const express = require('express');
const router = express.Router();

// ==================== //

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const client = mongoose.connections[0].client;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  height: Number,
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

// module.exports = { User }

// ===================== //

// get all user data
router.get('/', async (req, res) => {
  console.log('ass')
  try {
    await User.find({}).then(data => {
      console.log('fuck', data)
      res.status(200).json(data);
    })
  } catch (err) {
    console.log('errr', err);
    res.status(400).send(err);
  };
});

// create a user
router.post('/', async (req, res) => {
  const { username, height } = req.body;
  try {
    await User.create({ username, height }).then(data => {
      console.log('shit', data)
      res.status(200).json(data);
    })
  } catch (err) {
    res.status(400).send(err);
  };
});

module.exports = router;