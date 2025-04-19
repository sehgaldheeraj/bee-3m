const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const passport = require("../authentication/passport");

router.get("/register", (req, res) => res.render("register"));
router.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10); //10 salt/rounds
    await User.create({ username, email, password: hashedPassword, role });
    return res.status(201).send({ msg: "Registration Successful" });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
});

//Login
router.get("/login", (req, res) => res.render("login"));
router.post("/login", async (req, res) => {
  passport.authenticate("local");
});
//   /messages -> user who is logged in / authenticated
function isAuthenticated(req, res, next) {
  if (!req.session.user) {
    return res.status(403).send({ msg: "Not authorized" });
  }
  next();
  //if(req.isAuthenticated())
}
router.get("/messages", isAuthenticated, (req, res) => {
  res.status(200).send({ msg: "Access to messages granted" });
});
//router.get("/fyp", (req, res)=>{})

router.get("/currentsessions", (req, res) => {
  store.all((err, data) => {
    if (err) {
      console.log("error retrieving sessions:", err.message);
    } else {
      res.send(data);
    }
  });
});

/**
 * TASK 1: Get user profile [authenticated user]
 * TASK 2: Update user details [authenticated user]
 * TASK 3: Delete user [authenticated user]
 */

module.exports = router;
