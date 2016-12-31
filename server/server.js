var express = require('express');
var history = require('connect-history-api-fallback');
var app = express();
var requestHandlers = require('./requesthandlers.js');

// server-side routes
app.get('/api/dapps', requestHandlers.sendAllDapps);
app.post('/api/dapps', requestHandlers.saveDapp);


// serving index.html and client-side routes with Vue router
app.use(history())
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Server started at ', (new Date()).toString());
});
