const express = require("express");

const router = express.Router();
const todoRoutes = require('./todos.route');
//'/v1/users/'
//router.use("/users", userRoutes);
router.use("/todo", todoRoutes);
module.exports = router;
