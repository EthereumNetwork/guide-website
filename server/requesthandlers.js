var authRouter = require('express').Router()
var jwt = require('jwt-simple')
// var bcrypt = require('bcryptjs')
var moment = require('moment')
var db = require('./db.js')
var web3 = require('./web3.js')

let sendAllProjects = (req, res) => { db.Project.find().then(projects => res.send(projects)) }

let saveProject = (req, res) => {
  req.body.creator = req.user.username
  ;('__v' in req.body) && delete req.body.__v
  if (req.body._id) {
    console.log(req.body)
  } else {
    var project1 = new db.Project(req.body)
  }

  project1.save(function (err, userObj) {
    if (err) {
      res.send({result: 0, message: err})
    } else {
      console.log(req.user.username, ' created: ', project1)
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
