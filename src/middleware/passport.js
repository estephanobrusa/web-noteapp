const passport=require('passport');
const LocalStrategy=require('passport-local');

const User=require('../models/user');

passport.use('local-signup',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async(email,password,done)=>{
    const user = await User.findOne({ email: email });

    if (!user) {
      return done(null, false, { message: "Not User found." });
    } else {
      // Match Password's User
      const match = await user.comparePassword(password);
      if (match) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect Password." });
      }
    }

}))

passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
  