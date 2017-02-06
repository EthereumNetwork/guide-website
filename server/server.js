require('dotenv').config()
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var history = require('connect-history-api-fallback')

var auth = require('./auth.js')
var requestHandlers = require('./requesthandlers.js')

var app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(auth.initialize())

app.post('/api/login', requestHandlers.login)
app.get('/api/projects', requestHandlers.sendAllProjects)
app.post('/api/saveprojects', auth.authenticate(), requestHandlers.saveProject)
app.get('/api/blocknumber', requestHandlers.getBlockNumber)

// history between routes and static files to catch client-side route paths
app.use(history())

// serving index.html and build.js, client-side routes handled by Vue router
app.use(express.static('public'))

app.listen(3001, function () {
  console.log('Server started at ', (new Date()).toString())
})
