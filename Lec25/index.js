const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const memoryStore = require("memorystore")(session);
const methodOverride = require("method-override");
const cors = require("cors");
const app = express();

const URI = "mongodb://localhost:27017/testSoc";
// const store = new memoryStore({
//   checkPeriod: 86400000,
// });

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(
  session({
    secret: "pow####pow",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 680000, httpOnly: true },
    store: new memoryStore({
      checkPeriod: 86400000,
    }),
  })
);

const passport = require("./authentication/passport");
app.use(passport.initialize());
app.use(passport.session());
//app.use(passport.authenticate("session"));

app.use("/v1", require("./routes/index"));

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).send({
    message: "Something went wrong!",
    error: err.message || err, // Send the error details (avoid sensitive data)
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

app.listen(4000, () => {
  console.log("Learning Cookies @ 4000");
});
