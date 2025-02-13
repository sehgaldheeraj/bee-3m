const Todo = require("../models/todos.model");

const getTodo = async (req, res) => {
  try {
    //const todos = await Todo.getTodos();
    const todos = await Todo.find();
    res.render("index", { todos });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal server error", err: err.message });
  }
};

// const getTodosById = async (req, res) => {
//   const { id } = req.params;
//   const todo = await Todo.findById(id);
//   //const todo = await Todo.findOne({name: name});

// };

async function addTodo(req, res) {
  const { name, desc, category, state } = req.body;
  //add this to DB
  try {
    //await Todo.addTodo(name, type, status);

    const newTodo = new Todo(name, desc, category, state);
    //.pre middleware
    await newTodo.save();
    //.post middleware

    //await Todo.create(name, desc, category, state );
    //Todo.insertMany([{}, {}, {}]);
    return res.status(201).send({ message: "Todo added successfully" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal server error", err: err.message });
  }
  //send response to server
}

const updateTodo = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  try {
    //await Todo.updateTodo(id, status);
    await Todo.findByIdAndUpdate(id, { status: status });
    return res.status(200).send({ message: "Todo Updated successfully" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal server error", err: err.message });
  }
};

module.exports = {
  getTodo,
  addTodo,
  updateTodo,
};
