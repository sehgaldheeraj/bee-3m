const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "buyer" },
});

userSchema.methods.verifyPassword = async function (password) {
  const match = await bcrypt.compare(password, this.password); // 'this' will now refer to the User instance
  return match;
};
//userSchema.statics.

const User = mongoose.model("User", userSchema);

module.exports = User;
