import "./styles/amountCounter.css";
import { BasketContext } from "../../contexts/BasketContext";
import { UpdateBasketContext } from "../../contexts/UpdateBasketContext";
import { useContext } from "react";

const AmountCounter = ({ quantity, id }) => {
  const basket = useContext(BasketContext);
  const updateBasket = useContext(UpdateBasketContext);

  const handlePlus = () => {
    const newBasket = basket.map((item) => {
      if (item.product.id === id) {
        item.amount = quantity + 1;
      }
      return item;
    });
    localStorage.setItem("basket", JSON.stringify(newBasket));
    updateBasket();
  };

  const handleMinus = () => {
    const newBasket = basket.map((item) => {
      if (item.product.id === id) {
        item.amount = quantity - 1;
      }
      return item;
    });
    localStorage.setItem("basket", JSON.stringify(newBasket));
    updateBasket();
  }

  return (
    <div className="amount-counter d-flex justify-content-between">
      <button
        className="minus btn d-flex align-items-center justify-content-center"
        onClick={() => handleMinus()}
      >
        -
      </button>
      {<span className="amount">{quantity}</span>}
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
