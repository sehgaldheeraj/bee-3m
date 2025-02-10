async function getTodo(req, res) {
  try {
    const todos = await Todo.getTodos();
    res.render("index", { todos });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal server error", err: err.message });
  }
}
async function addTodo(req, res) {
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
}
module.exports = {
  getTodo,
  addTodo,
};
