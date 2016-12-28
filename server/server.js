var express = require('express');
var history = require('connect-history-api-fallback');
var db = require('./db.js');
var app = express();

// server-side routes
app.get('/api/dapps', function (req, res) {
  res.send('Hello World!')
})


// serving index.html and client-side routes with Vue router
app.use(history())
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Server started and');
});
