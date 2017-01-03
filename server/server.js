var express = require('express');
var bodyParser = require('body-parser');
//For enabling cors request
var cors = require('cors');
var history = require('connect-history-api-fallback');
var app = express();
app.use(cors());
app.use(bodyParser());
var requestHandlers = require('./requesthandlers.js');

// server-side routes
app.get('/api/dapps', requestHandlers.sendAllDapps);
//This handler will save dpp data to the database
app.post('/api/savedapps', requestHandlers.saveDapp);


// serving index.html and client-side routes with Vue router
app.use(history())
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Server started at ', (new Date()).toString());
});
