const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index");
});
// app.get("/styles.js", (req, res) => {
//   res.sendFile(path.join(__dirname, ".", "public", "styles.js"));
// });

/**
 * User: name, phone, password, email, role
 */

app.listen(3000, () => {
  console.log("Learning REST arch at 3000");
});
