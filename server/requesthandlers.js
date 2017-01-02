var db = require('./db.js');

sendAllDapps = (req, res) => {

  db.Dapp.find().then(dapps => res.send(dapps));

}

//This method will save new dapp
saveDapp = (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', '*');
  // res.header('Access-Control-Allow-Headers', '*');
console.log(req.body);

var responsebody=req.body;


//This is the new new dap object
var dapp1 = new db.Dapp({
  title: responsebody.Title,
  owner: responsebody.Owner,
  latestNews:responsebody.LatestNews,
  likes: [{ like: responsebody.Like, user: responsebody.UserName}],
  contact: {
    github: responsebody.Github,
    website: responsebody.Website,
    slack: responsebody.Slack,
    reddit: responsebody.Reddit,
    twitter:responsebody.Twitter,
  }
});

//Lets save it
dapp1.save(function (err, userObj) {
  if (err) {
  res.send({result:0,message:err});
  } else {
    res.send({result:1,message:''});
  }
});

   //res.send({result:1,message:''});
  //db.Dapp.find().then(dapps => res.send(dapps));

}

module.exports = {
    sendAllDapps,
    saveDapp
};
