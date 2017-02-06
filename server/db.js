var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/EthNW')
mongoose.Promise = Promise

var Schema = mongoose.Schema
var projectSchema = new Schema({
  title: String,
  shortDescription: String,
  longDescription: String,
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

var Project = mongoose.model('Project', projectSchema)
// Project.find().then(projects => console.log('following projects found:', projects))

// Project.remove({}, function (err) {
//   console.log('collection removed')
// })

module.exports.Project = Project
