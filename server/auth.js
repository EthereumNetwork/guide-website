var passport = require('passport')
var passportJWT = require('passport-jwt')
var ExtractJwt = passportJWT.ExtractJwt
var Strategy = passportJWT.Strategy

// passport-jwt config
var cfg = {
  jwtSecret: process.env.jwtSecret,
  jwtSession: { session: false }
}

var params = {
  secretOrKey: process.env.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeader()
}

var strategy = new Strategy(params, function (payload, done) {
  done(null, {user: payload.username})
})

passport.use(strategy)

exports.initialize = function () {
  return passport.initialize()
}
exports.authenticate = function () {
  return passport.authenticate('jwt', cfg.jwtSession)
}
exports.cfg = cfg
