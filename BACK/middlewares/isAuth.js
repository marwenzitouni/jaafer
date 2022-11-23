const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
// opts.issuer = "accounts.examplesoft.com";
// opts.audience = "yoursite.net";
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload.id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    }
    ).select('-password');
  })
);
// passport.use(
//   new JwtStrategy(opts, function (jwt_payload, done) {
//     Foyer.findOne({ _id: jwt_payload.id }, function (err, foyer) {
//       if (err) {
//         return done(err, false);
//       }
//       if (foyer) {
//         return done(null, foyer);
//       } else {
//         return done(null, false);
//         // or you could create a new account
//       }
//     }
//     ).select('-password');
//   })
// );

//foyerid

module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });