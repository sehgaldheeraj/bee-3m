const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end(`<h1>Welcome to Views</h1>`);
});
app.listen(3000, () => {
  console.log("server started at port 3000");
});
