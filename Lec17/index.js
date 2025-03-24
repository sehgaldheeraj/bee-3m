const express = require("express");
const app = express();
//CASE 1: Guard is outside the classroom
app.post("/classroomM", (req, res) => {
  const userIdCard = req.body;
  if (userIdCard.uniRollNo === "true") {
    return res.send({ msg: "Welcome to class of M" });
  }
  res.send({ msg: "50 rupay fine" });
});

//Case2: Guard is at the main gate
function guardMiddleware(req, res, next) {
  const userIdCard = req.body;
  if (!userIdCard.uniRollNo === "false") {
    return res.send({ msg: "50 rupay fine" });
  }
  next();
}
//function checkLaptop(req, res, next) {}

app.post("/classroomM", guardMiddleware, laptopCheck, (req, res) => {
  res.send({ msg: "Welcome to classroom M" });
});
app.post("/classroomN", guardMiddleware, (req, res) => {
  res.send({ msg: "Welcome to classroom M" });
});
app.post("/classroomO", (req, res) => {
  res.send({ msg: "Welcome to classroom M" });
});
app.listen(3000, () => {
  console.log("Learning middlewares @ 3000");
});
