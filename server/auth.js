var passport = require('passport');
var passportJWT = require('passport-jwt');
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var jwtSecret = require('./localvars.js').jwtSecret;
var User = require('../../db/models/User');

// passport-jwt config
var cfg = {
  jwtSecret: process.env.jwtSecret,
  jwtSession: { session: false }
};

var params = {
  secretOrKey: process.env.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeader()
};

var strategy = new Strategy(params, function(payload, done) {
  User.query().where('id', payload.id)
    .then(function(user) {
      var user = user[0];
      if (!user) {
        done(null, false);
      } else {
        done(null, user);
      }
    })
    .catch(function(err) {
      done(err, false);
    });
});

passport.use(strategy);


exports.initialize = function() {
  return passport.initialize();
};
exports.authenticate = function() {
  return passport.authenticate('jwt', cfg.jwtSession);
};
exports.cfg = cfg;
