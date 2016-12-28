var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/EthNW');
mongoose.Promise = Promise;

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('and we are connected to MongoDB with following dapps:');
// });

var Schema = mongoose.Schema;


var dappSchema = new Schema({
  title: String,
  owner: String,
  updatedAt: { type: Date, default: Date.now },
  latestNews: String,
  likes: [{ like: Boolean, user: String}],
  contact: {
    github: String,
    website: String,
    slack: String,
    reddit: String,
    twitter: String,
  }
});
var Dapp = mongoose.model('Dapp', dappSchema);

// var first = new Dapp({ title: 'Augur' });
// console.log(first); // 'Silence'
// first.save(function (err, first) {
//   if (err) return console.error(err);
//   console.log(first.title, 'created');
// });

Dapp.find().then(dapps => console.log('following dapps found:', dapps));

module.exports.Dapp = Dapp;
