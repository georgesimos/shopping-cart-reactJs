import React from "react";

// Product component
const Product = ({ price, title, quantity, onAddToCartClicked }) => {
  return (
    <div className="product--item">
      <div className="product_inner">
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/pro/ipad-pro-12in-compare-201810?wid=340&hei=342&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1540676947012"
          alt="product img"
        />
        <p> {title} </p>
        <p> {price} € </p>
        <p> {quantity} </p>
        <button onClick={onAddToCartClicked}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
