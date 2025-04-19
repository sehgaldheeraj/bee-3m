//import "./Products.css";
import { useState, useEffect } from "react";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:4000/v1/products");
      const data = await response.json();
      console.log(data.products);
      //products = data.products;
      setProducts(data.products);
    } catch (err) {
      console.log(err.message);
    }
  }
  /**
   * useEffect(cb, arr)
   */
  //MOUNT PHASE
  useEffect(() => {
    fetchProducts();
  }, []); //Second arg is dependency array
  //UPDATE PHASE
  useEffect(() => {
    fetchProducts();
  }, [products]);
  //UNMOUNT PHASE
  useEffect(() => {
    return () => {
      //delete the timer Id that will eventually stop the timer
    };
  }, []);

  return (
    <div className="Products">
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
}

export default Products;
