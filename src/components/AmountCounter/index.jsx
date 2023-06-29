import "./styles/amountCounter.css";
import { BasketContext } from "../../contexts/BasketContext";
import { UpdateBasketContext } from "../../contexts/UpdateBasketContext";
import { useContext } from "react";

const AmountCounter = ({ product, quantity, id}) => {
  const basket = useContext(BasketContext);
  const updateBasket = useContext(UpdateBasketContext);

  const handlePlus = () => {
    let contains = false;
    const newBasket = basket.map((item) => {
      if (item.product.id === id) {
        item.amount = quantity + 1;
        contains = true;
      }
      return item;
    });
    if (!contains) {
      newBasket.push({ product: product, amount: 1 });
    }
    localStorage.setItem("basket", JSON.stringify(newBasket));
    updateBasket();
  };

  const handleMinus = () => {
    let deleteItem = false;
    let newBasket = basket.map((item) => {
      if (item.product.id === id) {
        item.amount = quantity - 1;
        if (item.amount <= 0) {
          deleteItem = true;
        }
      }
      return item;
    });

    if (deleteItem) {
      newBasket = newBasket.filter((item) => item.product.id !== id);
    }
    localStorage.setItem("basket", JSON.stringify(newBasket));
    updateBasket();
  };

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
