import { useEffect, useState } from "react";
import AmountCounter from "../AmountCounter";
import "./styles/basketItem.css";

const BasketItem = ({ id, name, price, imgUrl }) => {
  const basket = JSON.parse(localStorage.getItem("basket"));
  const [count, setCount] = useState(null);

  useEffect(() => {
    let counter = 0;
    basket.map((item) => {
      if (item.id === id) {
        counter++;
      }
    });
    setCount(counter);
  }, []);

  
    return (
      <li className="basket-item d-flex align-items-center gap-3 m-3 pb-3">
        <div className="basket-item-image">
          <img src={imgUrl} alt="product" />
        </div>
        <div className="basket-item-details">
          <h4 className="basket-item-name">{name}</h4>
          {count && <AmountCounter amount={count} />}
          <div className="d-flex justify-content-between gap-5 pt-3">
            <span className="basket-item-price">{`${price * count}FT`}</span>
            <span className="remove">remove</span>
          </div>
        </div>
      </li>
    );
};

export default BasketItem;
