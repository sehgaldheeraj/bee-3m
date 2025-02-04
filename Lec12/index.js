const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const routes = require("./routes/index");

const app = express();

const Todo = require("./models/model.todos");

const URI = "";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/v1", routes);

async function connect() {
  try {
    await mongoose.connect(URI);
  } catch (err) {
    console.log(err.message);
  }
}
connect();
app.listen(3000, () => {
  console.log("Learning REST arch at 3000");
});
