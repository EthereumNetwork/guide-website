// const authRouter = require('express').Router()
const jwt = require('jwt-simple')
// const bcrypt = require('bcryptjs')
const moment = require('moment')
const db = require('./db.js')
const web3 = require('./web3.js')
const ethUtil = require('ethereumjs-util')
const shuffle = require('shuffle-array')

// Authentificatoin methods

module.exports.login = (req, res) => {
  let payload = { username: req.body.username, exp: moment().add(30, 'days').unix() }
  let token = jwt.encode(payload, process.env.jwtSecret)
  if (process.env[req.body.username] && process.env[req.body.username] === req.body.password) {
    res.json({ token: token })
  } else {
    res.status(401).send('auth error')
  }
}

// Project methods
let projectsList = []
let projectsListCN = []
let updateProjectsList = () => {
  db.Project.find({}, 'title shortDescription tags logoUrl').then(projects => { projectsList = shuffle(projects) })
  db.Project.find({}, 'title shortDescriptionCN tagsCN logoUrl').then(projects => { projectsListCN = shuffle(projects) })
}
updateProjectsList()
setInterval(updateProjectsList, 60000)

module.exports.sendAllProjects = (req, res) => { res.send(projectsList) }
module.exports.sendAllProjectsCN = (req, res) => { res.send(projectsListCN) }
module.exports.downloadAllProjects = (req, res) => { db.Project.find().then(projects => res.send(projects)) }
module.exports.sendProject = (req, res) => { db.Project.findOne({title: req.params.title.replace(/_+/g, ' ')}).then(project => res.send(project)) }

// Suggestion methods
module.exports.sendAllSuggestions = (req, res) => { db.Suggestion.find().then(suggestions => res.send(suggestions)) }
module.exports.deleteSuggestion = (req, res) => {
  db.Suggestion.remove({_id: req.body._id}, (err, dbAnswer) => {
    console.log('deleted ', req.body.title)
    res.send({result: 1, message: 'Successfully deleted ' + req.body.title})
  })
}

module.exports.saveProject = (req, res) => {
  db.Suggestion.remove({_id: req.body._id}, () => {})
  req.body.creator = req.user.username
  req.body._id = req.body.originalId
  console.log(req.body)
  delete req.body.originalId
  if (req.body._id) {
    delete req.body.__v
    delete req.body.updatedAt
    var query = { _id: req.body._id }
    db.Project.findOneAndUpdate(query, req.body, { upsert: true, new: true }, function (err, doc) {
      if (err) return res.send(500, { message: err })
      return res.send({result: 1, message: req.body.title + ' submitted successfully! Thank you.'})
    })
  } else {
    var project1 = new db.Project(req.body)
    project1.save(function (err, doc) {
      if (err) {
        res.send({result: 0, message: err})
      } else {
        console.log(req.user.username, ' created: ', project1.title)
        res.send({result: 1, message: req.body.title + ' submitted successfully! Thank you.'})
      }
    })
  }
  updateProjectsList()
}
module.exports.saveSuggestion = (req, res) => {
  delete req.body._id
  var suggestion1 = new db.Suggestion(req.body)
  suggestion1.save(function (err, doc) {
    if (err) {
      console.log('suggestion error', err)
      res.send({result: 0, message: err})
    } else {
      console.log(' suggested: ', suggestion1.title)
      res.send({result: 1, message: req.body.title + ' submitted successfully! Thank you.'})
    }
  })
}

// Translation methods

module.exports.sendAllTranslationsCN = (req, res) => {
  db.Project.find({ $or: [ { translatedCN: false }, { translatedCN: null } ] }).then(translations => res.send(translations))
}

// Explorer methods

module.exports.getBlockNumber = (req, res) => {
  res.json(web3.eth.blockNumber)
}

module.exports.getBlock = (req, res) => {
  web3.eth.getBlock(req.params.blockId, true, (error, blockData) => {
    if (error) {
      console.error(error)
    } else {
      for (let i = 0; i < blockData.transactions.length; i++) {
        blockData.transactions[i].from = ethUtil.toChecksumAddress(blockData.transactions[i].from || '')
        blockData.transactions[i].to = ethUtil.toChecksumAddress(blockData.transactions[i].to || '')
      }
      res.json(blockData)
    }
  })
}

module.exports.getTransaction = (req, res) => {
  web3.eth.getTransaction(req.params.txId, (error, txData) => {
    error ? console.error(error) : res.json(txData)
  })
}

module.exports.getLatestTransactions = (req, res) => {
  web3.eth.getBlock('pending', (error, txData) => {
    error ? console.error(error) : res.json(txData)
  })
}

module.exports.getBalanceByAddress = (req, res) => {
  web3.eth.getBalance(req.params.address, (error, balance) => {
    error ? console.error(error) : res.json(balance)
  })
}

module.exports.getTransactionsByAddress = (req, res) => {
  // not impplemented yet
  // see https://ethereum.stackexchange.com/questions/8900/how-to-get-transactions-by-account-using-web3-js
  res.json(['not', 'impplemented', 'yet'])
}

module.exports.getNodeCoordinates = (req, res) => {
  res.status(200)
    .sendFile(__dirname + "../public/src/assets/nodes.json");  
}

module.exports.getMeetupCoordinates = (req, res) => {
  res.status(200)
  .sendFile( __dirname + "../public/src/assets/groups.json"); 
}

module.exports.getMiscCoordinates = (req, res) => {
  res.status(200)
  .sendFile(__dirname + "../public/src/assets/misc.json");
}
