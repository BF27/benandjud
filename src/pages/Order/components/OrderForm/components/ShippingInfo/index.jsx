import { useContext, useEffect, useState } from "react";
import { ChangeSippingPriceContext } from "../../../../context/ShippingContext";
import { UpdateBasketContext } from "../../../../../../contexts/UpdateBasketContext";
import { Navigate } from "react-router-dom";

const ShippingInfo = ({ changeBox, userData }) => {
  const [shippingCost, setShippingCost] = useState(0);
  const [shoppingDone, setShoppingDone] = useState(false);

  const updateBasket = useContext(UpdateBasketContext);
  const changeShipping = useContext(ChangeSippingPriceContext);

  useEffect(() => {
    if (userData.city === "budapest") {
      setShippingCost(1200);
    } else {
      setShippingCost(800);
    }
  }, []);

  useEffect(() => {
    changeShipping(shippingCost);
  }, [shippingCost]);

  function sendOrder() {
    localStorage.setItem("basket", JSON.stringify([]))
    updateBasket();
    setShoppingDone(true)
  }

  if (shoppingDone) {
    return <Navigate to="/checkout/done" />;
  } else {
    return (
      <div className="container d-flex flex-column gap-3">
        <div className="info d-flex flex-column gap-3">
          <div className="d-flex justify-content-between">
            <span className="bold">contact</span>
            <div className="d-flex flex-column align-items-end">
              <span>{userData.email}</span>
              <span>{userData.phone}</span>
            </div>
          </div>
          <div className="d-flex align-items-start justify-content-between">
            <span className="bold">ship to</span>
            <div className="d-flex flex-column align-items-end">
              <span>{`${userData["first-name"]} ${userData["last-name"]}`}</span>
              <span>{`${userData.zip}, ${userData.city}`}</span>
              <span>{userData.address}</span>
              {userData.address2 && <span>{userData.address2}</span>}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <span className="bold">Shipping cost</span>
            <span>{`${shippingCost}FT`}</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <span className="back" onClick={() => changeBox(false)}>
              Return To Information
            </span>
            <button className="btn" onClick={() => sendOrder()}>
              order
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ShippingInfo;
