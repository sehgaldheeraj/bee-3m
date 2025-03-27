const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const memoryStore = require("memorystore")(session);
const User = require("./models/user.model");
const app = express();

const URI = "mongodb://localhost:27017/testSoc";
const store = new memoryStore({
  checkPeriod: 86400000,
});
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "pow####pow",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 680000, httpOnly: true },
    store: store,
  })
);

const passport = require("./authentication/passport");
app.use(passport.initialize());
//app.use(passport.session());
app.use(passport.authenticate("session"));
//Register
app.post("/register", async (req, res) => {
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
app.post("/login", async (req, res) => {
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
app.get("/messages", isAuthenticated, (req, res) => {
  res.status(200).send({ msg: "Access to messages granted" });
});
//app.get("/fyp", (req, res)=>{})

app.get("/currentsessions", (req, res) => {
  store.all((err, data) => {
    if (err) {
      console.log("error retrieving sessions:", err.message);
    } else {
      res.send(data);
    }
  });
});
//Connect to the server
async function connectDb() {
  try {
    await mongoose.connect(URI);
  } catch (err) {
    console.log(err.message);
  }
}
connectDb();

app.listen(3000, () => {
  console.log("Learning Cookies @ 3000");
});
