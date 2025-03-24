const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const app = express();

const URI = "localhost:27017";

//Register
app.post("/register", async (req, res) => {
  const newUser = req.body;
  try {
    await User.create(newUser);
    return res.status(201).send({ msg: "Registration Successful" });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
});

//Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ msg: "Kindly Register" });
    }
    if (user.password != password) {
      return res.status(401).send({ msg: "Invalid creds" });
    }
    res.status(200).send({ msg: "Logged in successfully" });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
});

//Connect to the server
mongoose.connect(URI);

app.listen(3000, () => {
  console.log("Learning Cookies @ 3000");
});
