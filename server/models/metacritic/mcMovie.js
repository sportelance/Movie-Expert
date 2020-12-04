const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Docs: https://mongoosejs.com/docs/guide.html
 */

const UserPrediction = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  score: Number,
});

const DailySnapshot = new Schema({
  date: Number, // 10202020 (MMDDYYYY)
  averagePrediction: Number,
  totalPredicting: Number,
  10: Number, // number of people predicting ten or below
  20: Number, // grouping this way lets you avoid storing everyone's predictions -- and you can still create a bar graph from it
  30: Number,
  40: Number,
  50: Number,
  60: Number,
  70: Number,
  80: Number,
  90: Number,
  100: Number,
})

const Movie = new Schema({
  // _id auto generated
  categoryId: {type: Schema.Types.ObjectId, ref: 'MetacriticCategory'}, // in case we want a feature where we search for a category by movie
  title: String,
  director: String,
  starring: String,
  plot: String,
  studio: String,
  poster: String, // likely the URL to the database where it's stored (some API or something but maybe my own DB to store cause that could get expensive)
  imdb: String, // either the IMDbID or just the URL
  embargo: Number, // date and a time '102020201400' 'MMDDYYYYTTTT'
  userPredictions: [UserPrediction], // I like having this be stored here so you can do data visualization on how people are predicting it -- take a daily snapshot and save it in the log below
  dailySnapshots: [DailySnapshot], // stops taking snapshot day after embargo lifts
});

module.exports = mongoose.model('MetacriticMovie', Movie);