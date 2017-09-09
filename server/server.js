require('dotenv').config()
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const bodyParser = require('body-parser')
const history = require('connect-history-api-fallback')

const auth = require('./auth.js')
const requestHandlers = require('./requesthandlers.js')
require('./deepstream.js')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(auth.initialize())

// Authentificatoin routes
app.post('/api/login', requestHandlers.login)
// Project routes
app.get('/api/en/projects', requestHandlers.sendAllProjects)
app.get('/api/cn/projects', requestHandlers.sendAllProjectsCN)
app.get('/download/projects', requestHandlers.downloadAllProjects)
app.get('/api/project/:title', requestHandlers.sendProject)
app.post('/api/saveprojects', auth.authenticate(), requestHandlers.saveProject)
// Suggestion routes
app.get('/api/suggestions', requestHandlers.sendAllSuggestions)
app.post('/api/savesuggestion', requestHandlers.saveSuggestion)
app.post('/api/deletesuggestion', auth.authenticate(), requestHandlers.deleteSuggestion)
// Translation routes
app.get('/api/translationsCN', requestHandlers.sendAllTranslationsCN)
// Explorer routes
app.get('/api/blocknumber', requestHandlers.getBlockNumber)
app.get('/api/block/:blockId', requestHandlers.getBlock)
app.get('/api/tx/:txId', requestHandlers.getTransaction)
app.get('/api/txs/:address', requestHandlers.getTransactionsByAddress)
app.get('/api/txs', requestHandlers.getLatestTransactions)
app.get('/api/balance/:address', requestHandlers.getBalanceByAddress)

// history between routes and static files to catch client-side route paths
app.use(history())

// return .js.gz so you can still load bundle.js from the html but will receive bundle.js.gz
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  next()
})

// serving index.html and build.js, client-side routes handled by Vue router
app.use(express.static('public/dist'))

server.listen(3001, function listening () {
  console.log('Server started at', (new Date()).toString(), 'on port', server.address().port)
})
