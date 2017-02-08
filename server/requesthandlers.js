var authRouter = require('express').Router()
var jwt = require('jwt-simple')
// var bcrypt = require('bcryptjs')
var moment = require('moment')
var db = require('./db.js')
var web3 = require('./web3.js')

let sendAllProjects = (req, res) => { db.Project.find().then(projects => res.send(projects)) }

let saveProject = (req, res) => {
  var project1 = new db.Project({
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    latestNews: req.body.latestNews,
    creator: req.user.username,
    likes: [{like: req.body.Like, user: req.body.userName}],
    logoUrl: req.body.logoUrl,
    contact: {
      github: req.body.github,
      website: req.body.website,
      slack: req.body.slack,
      reddit: req.body.reddit,
      twitter: req.body.twitter,
      facebook: req.body.facebook,
      email: req.body.email,
      blog: req.body.blog
    }
  })
  project1.save(function (err, userObj) {
    if (err) {
      res.send({result: 0, message: err})
    } else {
      console.log('project created: ', req.user.username, project1)
      res.send({result: 1, message: ''})
    }
  })
}

let login = (req, res) => {
  let payload = { username: req.body.username, exp: moment().add(30, 'days').unix() }
  let token = jwt.encode(payload, process.env.jwtSecret)
  if (process.env[req.body.username] && process.env[req.body.username] === process.env[req.body.password]) {
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
