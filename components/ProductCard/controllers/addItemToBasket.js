import { db } from "../../../utils/initFirebase";
import { doc, collection, getDoc } from "firebase/firestore";

const addItemToBasket =  (event) => {
  const itemId = event.target.id.split("_")[1];

  const getItemFromDb = async () => {
    const itemRef =  collection(db,"products");
    return item.data();
  }
  console.log(getItemFromDb())
};

export default addItemToBasket;
