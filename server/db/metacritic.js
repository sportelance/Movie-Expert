const mongoose = require('mongoose');
const uri = 'mongodb+srv://justinjaeger:0scarExpert@cluster0.jznd2.mongodb.net/movie-expert?retryWrites=true&w=majority';

// ======= Connect to mongoDB ======= //

module.exports = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  dbName: 'movie-expert',
})
.then(async () => {
  console.log('Connected to MongoDB userDb.');

  const db = mongoose.connections[0].client.db('movie-expert');
  const userCollection = db.collection('User');

  // CREATE INDEX HERE
  await userCollection.createIndex({ height: 1 })
    .then(data => {
      console.log('index created:', data);
    })
    .catch(err => { console.log('error creating index', err) })
})
.catch((err) => console.log(err));