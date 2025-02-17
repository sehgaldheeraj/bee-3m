const express = require("express");
const router = express.Router();
const {
  getTodo,
  addTodo,
  updateTodo,
} = require("../controllers/todos.controller");

router.get("/", getTodo);

//router.get("/:id", getTodoById);

router.get("/new", (req, res) => res.render("addTodo"));

router.post("/", addTodo);

router.get("/:id/edit", (req, res) =>
  res.render("updateTodo", { id: req.params.id })
);

router.patch("/:id", updateTodo);

//router.delete("/:id", deleteTodo);

module.exports = router;
