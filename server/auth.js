const passport = require('passport')
const passportJWT = require('passport-jwt')
const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy

// passport-jwt config
const cfg = {
  jwtSecret: process.env.jwtSecret,
  jwtSession: { session: false }
}

const params = {
  secretOrKey: process.env.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new Strategy(params, function (payload, done) {
  done(null, {username: payload.username})
})

passport.use(strategy)

exports.initialize = function () {
  return passport.initialize()
}
exports.authenticate = function () {
  return passport.authenticate('jwt', cfg.jwtSession)
}
exports.cfg = cfg
