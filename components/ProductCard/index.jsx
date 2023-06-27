import AmountCounter from "../AmountCounter";

import { useEffect, useState, useContext } from "react";

import { BasketContext } from "../../contexts/BasketContext";
import { UpdateBasketContext } from "../../contexts/UpdateBasketContext";

import "./styles/productCard.css";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const basket = useContext(BasketContext);
  const updateBasket = useContext(UpdateBasketContext);

  useEffect(() => {
    if (basket) {
      const thisProd = basket.filter((item) => item.product.id === product.id);
      if (thisProd.length > 0) {
        const amountOfThisProd = thisProd[0].amount;
        setQuantity(amountOfThisProd);
      }
    }
  }, []);

  const addToBasket = () => {
    let count = quantity;
    const lsBasket = JSON.parse(localStorage.getItem("basket"));
    let newBasket;

    if (lsBasket) {
      const thisProduct = lsBasket.filter(
        (item) => product.id === item.product.id
      );
      if (thisProduct[0]) {
        count++;
        setQuantity(count);
      } else {
        count++
        setQuantity(count);
      }
      newBasket = lsBasket.filter((item) => product.id !== item.product.id);
    } else {
      newBasket = [];
      count++
      setQuantity(count)
    }
    newBasket.push({
      product: product,
      amount: count,
    });
    localStorage.setItem("basket", JSON.stringify(newBasket));
    updateBasket()
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
       <AmountCounter amount={quantity}/>
      <span className="product-card-price">{product.price} ft / 250g</span>
      <button
        id={`add-item_${product.id}`}
        className="btn product-card-button"
        onClick={() => {
          addToBasket();
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
