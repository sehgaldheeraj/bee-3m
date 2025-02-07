const express = require("express");
const router = express.Router();
const { getTodo, add } = require("../controllers/todos.controller");
/**
 * TASK 1: GET home page
 */
router.get("/", getTodo);
/**
 * TASK 2: GET allTodos view
 */
//'/v1/todo/addTodo'
router.get("/addTodo", (req, res) => {
  res.render("addTodo");
});

/**
 * TASK 3: POST todo
 */
router.post("/",addTodo);
// PATCH '/todos/3'
router.patch("/:id", async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  try {
    await Todo.updateTodo(id, status);
    return res.status(200).send({ message: "Todo Updated successfully" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal server error", err: err.message });
  }
});
module.exports = router;
