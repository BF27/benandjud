import AmountCounter from "../AmountCounter";
import { useEffect, useState } from "react";

import "./styles/productCard.css";

const ProductCard = ({ product }) => {
  const [amount, setAmount] = useState(0);

  useEffect(()=> {
    const basket = JSON.parse(localStorage.getItem("basket"));
    const thisProd = basket.filter((item)=> item.product.id === product.id);
    if (thisProd.length > 0) {
      const amountOfThisProd = thisProd[0].amount;
      setAmount(amountOfThisProd);
    }
  },[]);

  const addToBasket = () => {
    const lsBasket = JSON.parse(localStorage.getItem("basket"))
    let newBasket 
    if (lsBasket) {
      const thisProduct = lsBasket.filter(
        (item) => product.id === item.product.id
      );
      if (thisProduct[0]) {
        const newAmount = amount + 1
        setAmount(newAmount);
      } else {
        setAmount(1);
      }
      newBasket = lsBasket.filter((item) => product.id !== item.product.id);
    } else {
      newBasket = [];
      setAmount(1);
    }
    newBasket.push({ product: product, amount: amount });
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };
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
      <button
        id={`add-item_${product.id}`}
        className="btn product-card-button"
        onClick={(event) => addToBasket(event)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
