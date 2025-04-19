const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cartSchema = new mongoose.Schema({
  productId: { type: mongoose.SchemaTypes.ObjectId(), required: true },
  qty: { type: Number, required: true },
});
const userSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "buyer" },
  cart: [cartSchema],
  cartPrice: { type: Number, default: 0 },
});

userSchema.methods.verifyPassword = async function (password) {
  const match = await bcrypt.compare(password, this.password); // 'this' will now refer to the User instance
  return match;
};
//userSchema.statics.

const User = mongoose.model("User", userSchema);

module.exports = User;
