import { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import {
  ShippingPriceContext,
  ChangeSippingPriceContext,
} from "./context/ShippingContext";

import "./styles/order.css";

const Order = () => {
  const [shippingPrice, setShippingPrice] = useState(0);
  const changeShippingPrice = (shipping) => {
    setShippingPrice(shipping);
  };

  return (
    <main className="order-page container-fluid row d-flex flex-column flex-md-row">
      <ShippingPriceContext.Provider value={shippingPrice}>
        <ChangeSippingPriceContext.Provider value={changeShippingPrice}>
          <OrderForm />
          <OrderList />
        </ChangeSippingPriceContext.Provider>
      </ShippingPriceContext.Provider>
    </main>
  );
};

export default Order;
