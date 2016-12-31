var db = require('./db.js');

sendAllDapps = (req, res) => {
  db.Dapp.find().then(dapps => res.send(dapps));

}
saveDapp = (req, res) => {
  db.Dapp.find().then(dapps => res.send(dapps));

}

module.exports = {
    sendAllDapps,
    saveDapp
};
