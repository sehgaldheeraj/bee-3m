const Product = require("../models/product.model");
const User = require("../models/user.model");
const router = require("express").Router();
//ADD a product to cart
//  PATCH : /v1/cart/add
/**
 * userId, productId
 */
router.patch("/add", async (req, res) => {
  const { productId, qty } = req.body;
  const userId = req.user.id;
  try {
    //getUserById
    //modify user object to include cart
    const user = await User.findById(id);
    if (!user) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    // user.cart.push({productId: productId, qty: qty});
    // user.save();
    //cart = [{productId, qty}, {}, {}, {}]
    await User.findByIdAndUpdate(id, {
      cart: cart.push({ productId: productId, qty: qty }),
    });
    const product = await Product.findProductById(productId);

    res.status(200).json({ totalPrice: user.price + product.price * qty });
  } catch (err) {
    
  }
});
//REMOVE a product from cart
//CHECKOUT
module.exports = router;
