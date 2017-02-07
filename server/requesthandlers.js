var authRouter = require('express').Router()
var jwt = require('jwt-simple')
// var bcrypt = require('bcryptjs')
var moment = require('moment')
var db = require('./db.js')
var web3 = require('./web3.js')

let sendAllProjects = (req, res) => {
  console.log('sendingAllProjects')
  db.Project.find().then(projects => res.send(projects))
}

let saveProject = (req, res) => {
  var project1 = new db.Project({
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    latestNews: req.body.latestNews,
    likes: [{like: req.body.Like, user: req.body.userName}],
    logoUrl: req.body.logoUrl,
    contact: {
      github: req.body.github,
      website: req.body.website,
      slack: req.body.slack,
      reddit: req.body.reddit,
      twitter: req.body.twitter,
      facebook: req.body.facebook
    }
  })
  project1.save(function (err, userObj) {
    if (err) {
      res.send({result: 0, message: err})
    } else {
      res.send({result: 1, message: ''})
    }
  })
}

let login = (req, res) => {
  let payload = { id: 1, exp: moment().add(30, 'days').unix() }
  let token = jwt.encode(payload, process.env.jwtSecret)
  if (req.body.username === process.env.username && req.body.password === process.env.password) {
    res.json({ token: token })
  } else {
    res.status(401).send('auth error')
  }
}

let getBlockNumber = (req, res) => {
  console.log(web3.eth.blockNumber)
  res.json(web3.eth.blockNumber)
}

module.exports = {
  sendAllProjects,
  saveProject,
  login,
  getBlockNumber
}
