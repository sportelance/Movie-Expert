const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MetacriticPrediction = require('./metacritic/mcPrediction');

/**
 * Docs: https://mongoosejs.com/docs/guide.html
 * 
 * MAP: Creates a nested document with arbitrary keys
 */

const User = new Schema({
  // _id auto generated
  username: { type: String, required: true, unique: true }, // note: "ObjectId('id'),getTimestamp()" returns when it was created
  admin: { type: String, default: false },
  image:  String,
  lastLoggedIn: String,
  friends: [Friend], // can now iterate through friends by username
  metacriticPredictions: [MetacriticPrediction], // { mcp_id, true } --> so that you can retrieve by ID
});

module.exports = mongoose.model('User', User);