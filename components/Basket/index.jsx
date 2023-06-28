import showBasket from "./controllers/showBasket";
import { useEffect, useState, useContext } from "react";
import BasketItem from "../BasketItem";
import CheckOutBtn from "../CheckOutBtn";
import { BasketContext } from "../../contexts/BasketContext";

import "./styles/basket.css";

const Basket = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const basket = useContext(BasketContext);

  return (
    <div className="basket d-flex justify-content-center flex-column">
      <header className="basket-header d-flex align-items-center justify-content-end gap-3 ">
        <span className="basket-title transparent-color d-none d-sm-block pt-2 d-flex align-items-center">
          Cart
        </span>
        <button
          className="basket-btn btn d-flex hide-basket align-items-center justify-content-center p-0"
          type="button"
          onClick={() => showBasket()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-basket3-fill"
            viewBox="0 0 16 16"
          >
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
          </svg>
        </button>
      </header>
      <div className="basket-dropdown d-none d-flex flex-column justify-content-between align-items-center">
        <ul className="basket-list">
          {basket?.map((item, i) => (
            <BasketItem key={i} item={item} />
          ))}
        </ul>
        <CheckOutBtn totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Basket;
