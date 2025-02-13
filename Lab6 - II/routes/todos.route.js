const express = require("express");
const router = express.Router();
const {
  getTodo,
  addTodo,
  updateTodo,
} = require("../controllers/todos.controller");

router.get("/", getTodo);

router.get("/addTodo", (req, res) => {
  res.render("addTodo");
});

router.post("/", addTodo);

router.patch("/:id", updateTodo);
module.exports = router;
