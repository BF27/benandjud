import AmountCounter from "../AmountCounter";
import { useState } from "react";

import "./styles/productCard.css";

const ProductCard = ({ product }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div className="product-card d-flex flex-column align-items-center gap-3">
      <div className="product-card-image-container">
        <img src={product.imgUrl} />
      </div>
      <h3 className="product-card-title text-center">{product.title}</h3>
      <p className="product-card-short-description">
        {product.shortDescription}
      </p>
      <AmountCounter amount={amount} />
      <span className="product-card-price">{product.price} ft / 250g</span>
      <button id={`add-item_${product.id}`} className="btn product-card-button" onClick={()=>console.log('clicked')}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
