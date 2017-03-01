require('dotenv').config()
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { path: '/socket/socket.io' })
const bodyParser = require('body-parser')
const history = require('connect-history-api-fallback')

const auth = require('./auth.js')
const requestHandlers = require('./requesthandlers.js')
require('./workers.js')(io)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(auth.initialize())

app.post('/api/login', requestHandlers.login)
app.get('/api/projects', requestHandlers.sendAllProjects)
app.get('/api/suggestions', requestHandlers.sendAllSuggestions)
app.post('/api/saveprojects', auth.authenticate(), requestHandlers.saveProject)
app.post('/api/savesuggestion', requestHandlers.saveSuggestion)
app.get('/api/blocknumber', requestHandlers.getBlockNumber)
app.get('/api/block/:blockId', requestHandlers.getBlock)
app.get('/api/tx/:txId', requestHandlers.getTransaction)
app.get('/api/txs/:address', requestHandlers.getTransactionsByAddress)
app.get('/api/txs', requestHandlers.getLatestTransactions)
app.get('/api/balance/:address', requestHandlers.getBalanceByAddress)

// history between routes and static files to catch client-side route paths
app.use(history())

// serving index.html and build.js, client-side routes handled by Vue router
app.use(express.static('public'))

server.listen(3001, function listening () {
  console.log('Server started at', (new Date()).toString(), 'on port', server.address().port)
})
