import React from "react";

const Product = ({ product }) => {
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
      </div>
    </div>
  );
};

export default Product;
