const express = require("express");

const app = express();
const Todo = require("./models/model.todos");
app.set("view engine", "ejs");
app.use(express.static("public"));
//urlencoded
app.use(express.urlencoded({ extended: true }));
/**
 * TASK 1: GET home page
 */
app.get("/todo", async (req, res) => {
  try {
    const todos = await Todo.getTodos();
    res.render("index", { todos });
  } catch (err) {}
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
app.post("/todo", async (req, res) => {
  const { name, type, status } = req.body;
  //add this to DB
  try {
    await Todo.addTodo(name, type, status);
    return res.status(201).send({ message: "Todo added successfully" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal server error", err: err.message });
  }
  //send response to server
});
/**
 * 200 - 299 Success codes
 * 300 - 399 default codes
 * 400 - 499 Client side error
 * 500 - beyond Server side error
 */
app.listen(3000, () => {
  console.log("Learning REST arch at 3000");
});
