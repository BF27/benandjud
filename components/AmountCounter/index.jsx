import { useState } from "react";

import "./styles/amountCounter.css";

const AmountCounter = ({ amount }) => {
  const [count, setCount] = useState(amount);

  return (
    <div className="amount-counter d-flex justify-content-between">
      <button className="plus btn d-flex align-items-center justify-content-center">
        +
      </button>
      <span className="amount">{count}</span>
      <button className="minus btn d-flex align-items-center justify-content-center">
        -
      </button>
    </div>
  );
};

export default AmountCounter;
