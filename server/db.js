const mongoose = require('mongoose')
mongoose.connect('mongodb://' + process.env.mongoDB, function (err) {
  if (err) {
    return console.error(err)
  }
})
mongoose.Promise = Promise

const Schema = mongoose.Schema
const projectSchema = new Schema({
  title: { type: String, unique: true, required: true },
  shortDescription: String,
  longDescription: String,
  tags: String,
  updatedAt: { type: Date, default: Date.now },
  creator: String,
  owner: String,
  likes: [{like: Boolean, user: String}],
  logoUrl: String,
  license: String,
  featured: Number,
  contractAddrMain: String,
  contractAddrTest: String,
  github: String,
  website: String,
  twitter: String,
  linkedin: String,
  facebook: String,
  slack: String,
  reddit: String,
  wechat: String,
  email: String,
  blog: String
})
const suggestionSchema = new Schema({
  title: { type: String, required: true },
  shortDescription: String,
  longDescription: String,
  tags: String,
  updatedAt: { type: Date, default: Date.now },
  creator: String,
  owner: String,
  likes: [{like: Boolean, user: String}],
  logoUrl: String,
  license: String,
  featured: Number,
  contractAddrMain: String,
  contractAddrTest: String,
  github: String,
  website: String,
  twitter: String,
  linkedin: String,
  facebook: String,
  slack: String,
  reddit: String,
  wechat: String,
  email: String,
  blog: String,
  originalId: String
})

const Project = mongoose.model('Project', projectSchema)
const Suggestion = mongoose.model('Suggestion', suggestionSchema)

// Project.find().then(projects => console.log('following projects found:', projects))

// Project.remove({}, function (err) {
//   console.log('collection removed')
// })
// Suggestion.remove({}, function (err) {
//   console.log('collection removed')
// })
const addressSchema = new Schema({
  address: { type: String, unique: true, required: true },
  transactions: [{ hash: String, to: String, from: String, blockNumber: Number, value: Number }]
})

const Address = mongoose.model('Address', addressSchema)
// Project.find().then(projects => console.log('following projects found:', projects))

// Project.remove({}, function (err) {
//   console.log('collection removed')
// })

module.exports.Project = Project
module.exports.Suggestion = Suggestion
module.exports.Address = Address
module.exports.connection = mongoose.connection
