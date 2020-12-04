const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Docs: https://mongoosejs.com/docs/guide.html
 */

const Category = new Schema({
  // _id auto generated
  name: String, // Week 10-22
  type: String, // Week
  open: { type: Boolean, default: true }, // if you can predict or not
  year: Number, // 2020
  month: String, // 'Jan'
  date: Number, // 10202020 (MMDDYYYY)
  dateClosed: String, // 10302020 (MMDDYYYY)
  collectiveScore: Number, // 88 (then add the '%' on the front end)
  collectiveRank: Number, // 223 (your rank)
  totalUsersPredicting: Number, // 1430 (out of)
  leaderboard: [{ // [{ userID : _id, score: Number }] -- idk if it needs to be this specific or just an empty array
    userID: { type: Schema.Types.ObjectId, ref: 'User' },
    score: Number,
  }],
  movies: [{ type: Schema.Types.ObjectId, ref: 'MetacriticMovie' }], // movie _id
});

module.exports = mongoose.model('MetacriticCategory', Category);