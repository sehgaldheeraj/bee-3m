const router = require("express").Router();
const Product = require("../models/product.model");

//1: ADD PRODUCT(View)
/**
 * TASK1: Create a view that accepts the user responses
 *        for adding a product to the DB
 * TASK2: Show all products on UI gracefully
 */
function isSeller(req, res, next) {
  req.session;
}

router.get("/new", isSeller, (req, res) => {
  console.log(req.session);
  res.render("addProduct");
});
//2: ADD PRODUCT : Adds product having data in req.body
router.post("/", async (req, res) => {
  const { name, desc, price, quantity, category } = req.body;
  try {
    await Product.create({ name, desc, price, quantity, category });
    //res.status(201).send({ message: "Product added successfully" });
    res.redirect("/v1/products");
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
    //res.render("products", { products });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal Server Error", err: err.message });
  }
});
//4: GET PRODUCT BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.render("product", { product });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal Server Error", err: err.message });
  }
});
//5: UPDATE PRODUCT DATA (View)
router.get("/:id/edit", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.render("updateProduct", { product });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal Server Error", err: err.message });
  }
});
//6: UPDATE PRODUCT DATA
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, desc, price, quantity, category } = req.body;
  try {
    await Product.findByIdAndUpdate(id, {
      name: name,
      desc: desc,
      price: price,
      quantity: quantity,
      category: category,
    });
    res.redirect("/v1/products");
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal Server Error", err: err.message });
  }
});
//7: DELETE PRODUCT
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.redirect("/v1/products");
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal Server Error", err: err.message });
  }
});

module.exports = router;
//11
