//importing the dependency
const express = require("express");
const bodyParser = require("body-parser");
//creating a server instance
const app = express();
//localhost:3000
app.get("/", (req, res) => {
  res.send("Welcome!");
}); //args - route, cb fn

//localhost:3000/home
app.get("/home", (req, res) => {
  res.send("Hi from Home");
});

//started server as a process
app.listen(3000, () => {
  console.log("Server started successfully");
});

//CRUD Operations
/**
 * CREATE: POST
 */

//npm install nodemon --save-dev    :saves as dev dependency
