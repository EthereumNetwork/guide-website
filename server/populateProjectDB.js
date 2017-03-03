var csvToArray = require('csv-to-array')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/EthNW')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to Mongo')
})

const projectSchema = new mongoose.Schema({
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

var Project = mongoose.model('Project', projectSchema)

// Project.remove({}, function(err) {
//      console.log('removed old collection, now repopulating')
//     });

function makeDBgreatAgain () {
  var newProject = {}
  var columns = ['title', 'website', 'shortDescription', 'longDescription', 'tags', 'logoUrl', 'owner', 'blog', 'email', 'github', 'linkedin', 'twitter', 'facebook', 'slack', 'reddit', 'wechat', 'license', 'featured', 'contractAddrMain', 'contractAddrTest']

  csvToArray({
    file: './projects.csv',
    columns: columns
  }, function (err, array) {
    for (var i = 0; i < array.length; i++) {
      newProject = {
        title: array[i].title,
        shortDescription: array[i].shortDescription,
        longDescription: array[i].longDescription,
        tags: array[i].tags,
        creator: 'init',
        owner: array[i].owner,
        likes: [],
        logoUrl: array[i].logoUrl,
        license: array[i].license,
        featured: array[i].featured,
        contractAddrMain: array[i].contractAddrMain,
        contractAddrTest: array[i].contractAddrTest,
        github: array[i].github,
        website: array[i].website,
        twitter: array[i].twitter,
        linkedin: array[i].linkedin,
        facebook: array[i].facebook,
        slack: array[i].slack,
        reddit: array[i].reddit,
        wechat: array[i].wechat,
        email: array[i].email,
        blog: array[i].blog
      }
      new Project(newProject).save(function (err, project) {
        if (err) return console.error(err)
        console.log(project.title + ' created at ' + project.updatedAt)
      })
    }
  })
}

makeDBgreatAgain()
