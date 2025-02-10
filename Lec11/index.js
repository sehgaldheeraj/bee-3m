const express = require("express");

const app = express();
const Todo = require("./models/model.todos");
app.set("view engine", "ejs");
app.use(express.static("public"));
/**
 * TASK 1: GET home page
 */
app.get("/todo", async (req, res) => {
  const todos = await Todo.getTodos();
  res.render("index", { todos });
});
/**
 * TASK 2: GET allTodos view
 */
app.get("/addTodo", (req, res) => {
  res.render("addTodo");
});

/**
 * TASK 3: POST todo
 */
app.post("/todo", (req, res) => {
  const { name, type, status } = req.body;
  //add this to DB
  Task.addTodo(name, type, status);
  //send response to server
});
app.listen(3000, () => {
  console.log("Learning REST arch at 3000");
});
