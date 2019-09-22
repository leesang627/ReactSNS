const passport = require('passport');
const {Strategy: LocalStrategy} = require('passport-local');
const bcrpyt = require('bcrypt');
const db = require('../models');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'userId',
    oasswordField: 'password',
  }, async (userId, password, done) => {
    try {
      const user = await db.User.findOne({ where: { userId }});
    } catch(e) {
      console.error(e);
      return done(e);
    }
  }));
};