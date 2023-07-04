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
          <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-lg-between">
            <span className="bold">contact</span>
            <div className="d-flex flex-column align-items-center align-items-lg-end ">
              <span>{userData.email}</span>
              <span>{userData.phone}</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-lg-between">
            <span className="bold">shipping address</span>
            <div className="d-flex  flex-column align-items-center align-items-lg-end">
              <span>{`${userData["first-name"]} ${userData["last-name"]}`}</span>
              <span>{`${userData.zip}, ${userData.city}`}</span>
              <span>{userData.address}</span>
              {userData.address2 && <span>{userData.address2}</span>}
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-lg-between">
            <span className="bold">Shipping cost</span>
            <span>{`${shippingCost}FT`}</span>
          </div>
          <div className="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-lg-between">
            <span className="back text-center text-lg-left" onClick={() => changeBox(false)}>
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
