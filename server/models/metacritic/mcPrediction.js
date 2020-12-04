const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Stores what a specific user is predicting for specific category
 * 
 * To find all users who have placed in a particular category, 
 * - get all MetacriticPredictins by categoryID 
 * - if score exists, create an object like {userId : _id, score: Number}
 * - then sort the array and store sorted array in mcCategory
 * - if you want your rank, you can find that in mcCategory by index+1
 */

const MoviePrediction = new Schema({
  movieId: {type: Schema.Types.ObjectId, ref: 'MetacriticMovie'}, 
  prediction: {type: Number},
})

const CategoryPrediction = new Schema({
  // _id auto generated
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  categoryId: { type: Schema.Types.ObjectId, ref: 'MetacriticCategory' },
  predictingAll: { type: Boolean, default: false }, // if predictions.length === MetacriticCategory.movies.length, this becomes true
  predictions: { type: MoviePrediction, default: {} }, // added whenever user makes a prediction
  score: {type: Number},
});

module.exports = mongoose.model('MetacriticPrediction', CategoryPrediction);