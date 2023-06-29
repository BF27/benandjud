import React from "react";
import AmountCounter from "../../../../../../components/AmountCounter";

const OrderListItem = ({ product }) => {
  return (
    <li className="d-flex justify-content-start align-items-start gap-3">
      <img src={product.product.imgUrl} alt="title" />
      <div className="d-flex flex-column container-fluid gap-3">
        <h4>{product.product.title}</h4>
        <AmountCounter
          product={product}
          quantity={product.amount}
          id={product.product.id}
        />
        <span>{`${product.product.price * product.amount}ft`}</span>
      </div>
    </li>
  );
};

export default OrderListItem;
