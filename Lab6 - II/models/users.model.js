const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  const user = await this.findOne({ email: this.email });
  if (user) {
    res.send({ message: "User with this email already registered" });
  }
  next();
});
userSchema.post("save", function (next) {
  console.log("user successfully registered");
  next();
});
