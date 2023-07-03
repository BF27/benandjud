import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./styles/checkOutBtn.css";

const CheckOutBtn = ({ totalPrice }) => {
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (totalPrice !== 0) {
      setEmpty(false);
    }
  }, [totalPrice]);

  return (
    <button className="check-out-btn">
      <Link
        to={empty ? "#" : "/checkout"}
        className="check-out-link d-flex justify-content-between align-items-center gap-3"
      >
        <span>check out</span>
        <div className="divider"></div>
        <span>{`${totalPrice}ft`}</span>
      </Link>
    </button>
  );
};

export default CheckOutBtn;
