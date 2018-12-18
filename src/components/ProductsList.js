import React from "react";
import Product from "./Product";

// ProductList Component
const ProductsList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          onAddToCartClicked={() => addToCart(product.id)}
        />
      ))}
    </div>
  );
};
export default ProductsList;
