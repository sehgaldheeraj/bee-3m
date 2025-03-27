const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const memoryStore = require("memorystore")(session);

const app = express();

const URI = "mongodb://localhost:27017/testSoc";
const store = new memoryStore({
  checkPeriod: 86400000,
});

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

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

app.use("/v1", require("./routes/index"));
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
