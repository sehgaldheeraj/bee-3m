import React, { useState } from "react";

const Product = ({ product }) => {
  const { isAddedtoCart, SetIsAddedToCart } = useState(false);
  async function handleAddToCart(id) {}
  return (
    <div>
      <div class="productsCard" key={product.id}>
        <div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>
        <p>{product.desc}</p>
        <div>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
        {isAddedtoCart === false ? (
          <button
            onClick={() => {
              handleAddToCart(product.id);
              SetIsAddedToCart(true);
            }}
          >
            Add To Cart
          </button>
        ) : (
          <p>Item Already in cart</p>
        )}
      </div>
    </div>
  );
};

export default Product;
