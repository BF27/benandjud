import "./styles/amountCounter.css";

const AmountCounter = ({ quantity, id }) => {
  return (
    <div className="amount-counter d-flex justify-content-between">
      <button
        className="minus btn d-flex align-items-center justify-content-center"
        /* onClick={() => handleMinus()} */
      >
        -
      </button>
      {<span className="amount">{quantity}</span>}
      <button
        className="plus btn d-flex align-items-center justify-content-center"
        /* onClick={() => handlePlus()} */
      >
        +
      </button>
    </div>
  );
};
export default AmountCounter;
