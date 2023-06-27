import { useState, useContext, useEffect } from "react";
import { BasketContext } from "../../contexts/BasketContext";
import { UpdateBasketContext } from "../../contexts/UpdateBasketContext";

import "./styles/amountCounter.css";

const AmountCounter = ({ amount, id }) => {
  const [count, setCount] = useState(amount);
  

  const basket = useContext(BasketContext);
  const updateBasket = useContext(UpdateBasketContext);

  useEffect(() => {
    if (basket) {
      const newBasket = basket.map((item) => {
        if (item.product.id === id) {
          item.amount = count;
        }
        return item;
      });
      JSON.stringify(localStorage.setItem("basket", JSON.stringify(newBasket)));
      updateBasket();
    }
  }, [count]);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    setCount(count - 1);
  }

  return (
    <div className="amount-counter d-flex justify-content-between">
      <button
        className="minus btn d-flex align-items-center justify-content-center"
        onClick={() => handleMinus()}
      >
        -
      </button>
      {<span className="amount">{count}</span>}
      <button
        className="plus btn d-flex align-items-center justify-content-center"
        onClick={() => handlePlus()}
      >
        +
      </button>
    </div>
  );
};
export default AmountCounter;
