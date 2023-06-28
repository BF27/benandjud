import AmountCounter from "../AmountCounter";

import { useEffect, useState, useContext } from "react";

import { BasketContext } from "../../contexts/BasketContext";
import { UpdateBasketContext } from "../../contexts/UpdateBasketContext";

import "./styles/productCard.css";

const ProductCard = ({ product }) => {
  const basket = useContext(BasketContext);
  const updateBasket = useContext(UpdateBasketContext);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (basket) {
      const itemInBasket = basket.filter(
        (prod) => prod.product.id === product.id
      )[0];
      if (itemInBasket) {
        setQuantity(
          basket.filter((prod) => prod.product.id === product.id)[0].amount
        );
      }
    }

  }, []);

  useEffect(() => {
    updateBasket();
  }, [quantity]);

  const addToBasket = () => {
    let count = quantity;
    let newBasket;

    if (basket) {
      const thisProduct = basket.filter(
        (item) => product.id === item.product.id
      );
      if (thisProduct[0]) {
        count++;
        setQuantity(count);
      } else {
        count++;
        setQuantity(count);
      }
      newBasket = basket.filter((item) => product.id !== item.product.id);
    } else {
      newBasket = [];
      count++;
      setQuantity(count);
    }
    newBasket.push({
      product: product,
      amount: count,
    });
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
      <AmountCounter id={product.id} quantity={quantity} />
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
