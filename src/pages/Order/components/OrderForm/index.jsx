import { useState, useEffect } from "react";
import Logo from "../../../../components/Logo";

import "./styles/orderForm.css";
import UserDetails from "./components/UserDetails";
import ShippingInfo from "./components/ShippingInfo";

const OrderForm = () => {
  const [cont, setCont] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      setUserData(user);
    } else setUserData(JSON.parse(sessionStorage.getItem("userData")));
  }, []);

  const changeBox = (bool) => {
    setCont(bool);
  };

  const changeUserData = (data) => {
    setUserData(data);
  };

  return (
    <section
      className="order-form-container col d-flex align-items-center
    justify-content-center"
    >
      <div className="section-container container p-0 py-4">
        <div className="container-fluid p-0">
          <header className="d-flex align-items-center justify-content-center">
            <Logo />
          </header>
          <div className="contact-form-container">
            {!cont ? (
              <UserDetails
                changeBox={changeBox}
                changeUserData={changeUserData}
                userData={userData}
              />
            ) : (
              <ShippingInfo changeBox={changeBox} userData={userData} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
