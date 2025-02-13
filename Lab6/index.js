const express = require("express");
const app = express();

app.use(express.json());

function m1(req, res, next) {
  const { data } = req.body;
  if (!data) {
    res.send({ message: "please send data" });
  }
  data = data + " -s";
  next();
}

app.post("/", m1, (req, res) => {
  const { data } = req.body;
  //const newData = data + " -s";
  res.send({ data });
});

app.post("/second", (req, res) => {
  const { data } = req.body;
  res.send({ data });
});

app.listen(3000, () => {
  console.log("Learning middlwares @ 3000");
});
