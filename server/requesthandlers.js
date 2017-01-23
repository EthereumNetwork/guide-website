var db = require('./db.js')

let sendAllDapps = (req, res) => {
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

module.exports = {
  sendAllDapps,
  saveDapp
}
