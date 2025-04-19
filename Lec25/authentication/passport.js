const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user.model");

// Configure the LocalStrategy
passport.use(
  new LocalStrategy({ usernameField: "email" }, async function (
    email,
    password,
    done
  ) {
    try {
      // Use async/await with findOne() to retrieve the user
      const user = await User.findOne({ email: email });

      if (!user) {
        return done(null, false, { message: "Incorrect email or password" });
      }

      // Use a method like bcrypt to verify the password (assuming `verifyPassword` is a method on your User model)
      const isMatch = await user.verifyPassword(password);

      if (!isMatch) {
        return done(null, false, { message: "Incorrect email or password" });
      }

      return done(null, user); // If the user is found and password matches, authenticate the user
    } catch (err) {
      return done(err); // Pass the error to the done callback
    }
  })
);

// Serialize user to store in session
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, role: user.role });
  });
});

// Deserialize user from session
passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user); // Just return the user object
  });
});

module.exports = passport;
