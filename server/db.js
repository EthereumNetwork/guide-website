const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/EthNW')
mongoose.Promise = Promise

const Schema = mongoose.Schema
const projectSchema = new Schema({
  title: { type: String, unique: true, required: true },
  shortDescription: String,
  longDescription: String,
  updatedAt: { type: Date, default: Date.now },
  latestNews: [String],
  creator: String,
  likes: [{like: Boolean, user: String}],
  logoUrl: String,
  contact: {
    github: String,
    website: String,
    twitter: String,
    facebook: String,
    slack: String,
    reddit: String,
    email: String,
    blog: String
  }
})

const Project = mongoose.model('Project', projectSchema)
// Project.find().then(projects => console.log('following projects found:', projects))

// Project.remove({}, function (err) {
//   console.log('collection removed')
// })

module.exports.Project = Project
