import { Link } from "react-router-dom";

import "./styles/checkOutBtn.css";

const CheckOutBtn = ({ totalPrice }) => {
  return (
    <button className="check-out-btn btn">
      <Link to="/checkout" className="check-out-link d-flex justify-content-between align-items-center gap-3">
        <span>check out</span>
        <div className="divider"></div>
        <span>{`${totalPrice}ft`}</span>
      </Link>
    </button>
  );
};

export default CheckOutBtn;
