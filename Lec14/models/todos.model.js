const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: String,
  category: { type: String, default: "others" },
  state: { type: String, default: "pending" },
  time: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", todosSchema);
//todos

module.exports = Todo;
