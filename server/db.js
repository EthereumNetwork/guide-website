var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/EthNW')
mongoose.Promise = Promise

var Schema = mongoose.Schema
var dappSchema = new Schema({
  title: String,
  owner: String,
  description: String,
  updatedAt: { type: Date, default: Date.now },
  latestNews: String,
  likes: [{like: Boolean, user: String}],
  logoUrl: String,
  contact: {
    github: String,
    website: String,
    twitter: String,
    facebook: String,
    slack: String,
    reddit: String
  }
})

var Dapp = mongoose.model('Dapp', dappSchema)
Dapp.find().then(dapps => console.log('following dapps found:', dapps))

// Dapp.remove({}, function (err) {
//   console.log('collection removed')
// })

module.exports.Dapp = Dapp
