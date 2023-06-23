import AmountCounter from "../AmountCounter";
import "./styles/basketItem.css";

const BasketItem = ({ name, price, amount }) => {
  return (
    <li className="basket-item d-flex align-items-center gap-3 m-3 pb-3">
      <div className="basket-item-image">
        <img src="https://via.placeholder.com/100" alt="product" />
      </div>
      <div className="basket-item-details">
        <h4 className="basket-item-name">{name}</h4>
        <AmountCounter amount={amount} />
        <div className="d-flex justify-content-between gap-5 pt-3">
          <span className="basket-item-price">{`${price * amount}FT`}</span>
          <span className="remove">remove</span>
        </div>
      </div>
    </li>
  );
};

export default BasketItem;
