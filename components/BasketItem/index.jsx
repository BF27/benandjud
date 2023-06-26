import { useEffect, useState } from "react";
import AmountCounter from "../AmountCounter";
import "./styles/basketItem.css";

const BasketItem = ({ id, name, price, imgUrl }) => {
  const basket = JSON.parse(localStorage.getItem("basket"));
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    const basketItem = basket.filter((item) => id === item.product.id);
    console.log(basketItem);
    setQuantity(basketItem[0].amount);
  }, []);

  return (
    <li className="basket-item d-flex align-items-center gap-3 m-3 pb-3">
      <div className="basket-item-image">
        <img src={imgUrl} alt="product" />
      </div>
      <div className="basket-item-details">
        <h4 className="basket-item-name">{name}</h4>
        {quantity && <AmountCounter amount={quantity} />}
        <div className="d-flex justify-content-between gap-5 pt-3">
          <span className="basket-item-price">{`${price * quantity}FT`}</span>
          <span id={`remove_${id}`} className="remove">
            remove
          </span>
        </div>
      </div>
    </li>
  );
};

export default BasketItem;
