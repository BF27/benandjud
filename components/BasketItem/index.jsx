import AmountCounter from "../AmountCounter";
import "./styles/basketItem.css";
import { useContext } from "react";
import { BasketContext } from "../../contexts/BasketContext";
import { UpdateBasketContext } from "../../contexts/UpdateBasketContext";

const BasketItem = ({ item: product }) => {
  const basket = useContext(BasketContext);
  const updateBasket = useContext(UpdateBasketContext);

  const imgUrl = product.product.imgUrl;
  const name = product.product.title;
  const quantity = product.amount;
  const id = product.product.id;
  const price = product.product.price;

  const removeFromBasket = () => {
    const newBasket = basket.filter((item) => item.product.id !== id);
    localStorage.setItem("basket", JSON.stringify(newBasket));
    updateBasket();
  };



  return (
    <li className="basket-item d-flex align-items-center gap-3 m-3 pb-3">
      <div className="basket-item-image">
        <img src={imgUrl} alt="product" />
      </div>
      <div className="basket-item-details">
        <h4 className="basket-item-name">{name}</h4>
        <AmountCounter product={product} quantity={quantity} id={id} />
        <div className="d-flex justify-content-between gap-5 pt-3">
          <span className="basket-item-price">{`${price * quantity}FT`}</span>
          <span
            id={`remove_${id}`}
            className="remove"
            onClick={() => removeFromBasket()}
          >
            remove
          </span>
        </div>
      </div>
    </li>
  );
};

export default BasketItem;
