import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";

import "./styles/order.css";

const Order = () => {
  return (
    <main className="order-page container-fluid row">

        <OrderForm />
        <OrderList />

    </main>
  );
};

export default Order;
