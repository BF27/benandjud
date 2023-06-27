import { useState } from "react";


import "./styles/amountCounter.css";

const AmountCounter = ({ amount, id }) => {
  const [count, setCount] = useState(amount);

  const getCount = () => {

  }

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    setCount(count - 1);
  }

  return (
    <div className="amount-counter d-flex justify-content-between">
      <button className="minus btn d-flex align-items-center justify-content-center" onClick={handleMinus}>
        -
      </button>
      <span className="amount">{amount}</span>
      <button className="plus btn d-flex align-items-center justify-content-center" onClick={handlePlus}>
        +
      </button>
    </div>
  );
};
export default AmountCounter;
