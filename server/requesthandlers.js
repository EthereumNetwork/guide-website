var authRouter = require('express').Router()
var jwt = require('jwt-simple')
// var bcrypt = require('bcryptjs')
var moment = require('moment')
var db = require('./db.js')

let sendAllDapps = (req, res) => {
  console.log('sendingAllDapps')
  db.Dapp.find().then(dapps => res.send(dapps))
}

let saveDapp = (req, res) => {
  var dapp1 = new db.Dapp({
    title: req.body.title,
    owner: req.body.owner,
    description: req.body.description,
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
  dapp1.save(function (err, userObj) {
    console.log(userObj)
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

module.exports = {
  sendAllDapps,
  saveDapp,
  login
}
