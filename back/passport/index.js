const passport = require('passport');
const db = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => { // 서버 쪽에 {{ id: 3, cookie: 'asdf' }}
    return done(null, user.id);
  });
  passport.deserializeUser(async(id, done) => {
    try {
      const user = await db.User.findOne({
        where: { id },
      });
      return done(null, user); //req.user
    } catch(e) {
      console.error(e);
      return done(e);
    }
  })
}