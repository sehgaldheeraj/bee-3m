//importing the dependency
const express = require("express");
const bodyParser = require("body-parser");
const products = require("./data/products");
//const products = require("data");
//creating a server instance
const app = express();
app.use(express.json()); //middleware
app.use(bodyParser.json()); //middleware-2
//GET all products
//localhost:4000/products

//GET products where query
//localhost:4000/products?name=4k Monitor

//GET products where params
//localhost:4000/products/7
app.get("/products/:id", (req, res) => {
  const { name } = req.query;
  const { id } = req.params;
  if (id) {
    return res.send({ message: `product id: ${id}` });
  }
  if (name) {
    const queriedProducts = products.filter(
      (product) => product.prodName === name
    );

    return res.status(200).send({ products: queriedProducts });
  }
  res.status(200).send({ products: products });
});
//localhost:3000/products/1234
// app.get("/products/:id", (req, res) => {
//   const { id } = req.params;
//   res.send({ message: `product name is: ${id} ` });
// });

//started server as a process
app.listen(3000, () => {
  console.log("Server started successfully");
});
