import { Link } from "react-router-dom";
import "./styles/OrderSent.css";

const OrderSent = () => {

  return (
    <div className="order-sent container-fluid p-0 m-0 d-flex flex-column align-items-center justify-content-center">
      <h3>Your Order have been sent!</h3>
      <span>Please check your email for the receipt!</span>
      <Link to="/">Back to the shop</Link>
    </div>
  )
}

export default OrderSent
