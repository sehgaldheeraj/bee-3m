const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: String,
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  category: { type: String, default: "others" },
});

const Product = mongoose.model("Product", productsSchema);

module.exports = Product;
