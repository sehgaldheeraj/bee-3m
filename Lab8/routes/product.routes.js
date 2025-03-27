const router = require("express").Router();
const Product = require("../models/product.model");

//1: ADD PRODUCT(View)
router.get("/addProduct", (req, res) => {
  res.render("addProduct");
});
//2: ADD PRODUCT
router.post("/", async (req, res) => {
  const { name, desc, price, quantity, category } = req.body;
  try {
    await Product.create({ name, desc, price, quantity, category });
    res.status(201).send({ message: "Product added successfully" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal Server Error", err: err.message });
  }
});
//3: GET ALL PRODUCTS (search functionality)
router.get("/", async (req, res) => {
  const { query } = req.query;
  try {
    if (query) {
      const queriedProducts = await Product.find({ name: query });
      res.status(200).send({ products: queriedProducts });
    }
    const products = await Product.find();
    res.status(200).send({ products: products });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal Server Error", err: err.message });
  }
});
//4: GET PRODUCT BY ID
//5: UPDATE PRODUCT DATA (View)
//6: UPDATE PRODUCT DATA
//7: DELETE PRODUCT

module.exports = router;
