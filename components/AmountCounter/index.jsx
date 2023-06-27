import "./styles/amountCounter.css";

const AmountCounter = ({ amount }) => {

  return (
    <div className="amount-counter d-flex justify-content-between">
      <button className="minus btn d-flex align-items-center justify-content-center">
        -
      </button>
      <span className="amount">{amount}</span>
        <button className="plus btn d-flex align-items-center justify-content-center">
        +
      </button>
    </div>
  );
};

export default AmountCounter;
