import { db } from "../../../utils/initFirebase";
import { doc, getDoc } from "firebase/firestore";

const addItemToBasket = (event) => {
  const itemId = event.target.id.split("_")[1];
  const basket = localStorage.getItem("basket");

  const itemRef = doc(db, "products", itemId);
  getDoc(itemRef).then((docSnap) => {
    if (docSnap) {
      const item = docSnap.data();
      const basketItem = {
        id: item.id,
        name: item.title,
        price: item.price,
        imgUrl: item.imgUrl,
      };
      basket.push(basketItem);
      console.log(basket);
    } else {
      console.log("No such document!");
    }
  });
};

export default addItemToBasket;
