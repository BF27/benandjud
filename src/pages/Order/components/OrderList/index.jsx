import "./styles/orderList.css";
import { useContext, useState, useEffect } from "react";
import { BasketContext } from "../../../../contexts/BasketContext";
import OrderListItem from "./components/OrderListItem";

const OrderList = () => {
  const basket = useContext(BasketContext);

  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    basket.forEach((item) => (totalPrice += item.product.price * item.amount));
    setSubtotal(totalPrice);
  }, [basket]);

  useEffect(() => {
    setTotal(shipping + subtotal);
  }, [shipping, subtotal]);

  return (
    <section className="order-list-container col d-flex flex-column align-items-justify-content-center ">
      <div className="section-container">
        <div className="container-fluid d-flex flex-column justify-content-center align-items-start gap-4">
          <header></header>
          <ul className="order-list container d-flex flex-column gap-3">
            {basket.map((item, index) => (
              <OrderListItem key={index} product={item} />
            ))}
          </ul>

          <div className="discount container-fluid row-md d-flex flex-column  flex-md-row align-items-center justify-content-center gap-3">
            <input
              type="text"
              placeholder="gift card / discount"
              className="col-md"
            />
            <button type="button" className="btn col-md">
              Apply
            </button>
          </div>
          <div className="order-sum d-flex flex-column ">
            <span>{`Subtotal: ${subtotal}FT`}</span>
            <span>{`Shipping: ${shipping}FT`}</span>
            <span className="bold-text">{`Total: ${total}FT`}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
