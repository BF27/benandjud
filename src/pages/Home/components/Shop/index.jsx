import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";
import { db } from "../../../../../utils/initFirebase";
import { collection, getDocs } from "firebase/firestore";

import "./styles/shop.css";

const Shop = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const productsRef = collection(db, "products");
      const productsSnapshot = await getDocs(productsRef);
      const productsList = productsSnapshot.docs.map((doc) => doc.data());
      setProducts(productsList);
    };
    getProducts();
  }, []);

  return (
    <>
      <div id="to-shop"></div>
      <section id="shop" className="shop container-fluid position-relative">
        <div className="container">
          <h2 className="text-center">Shop</h2>
          <div className="product-card-container d-flex flex-wrap justify-content-center gap-5">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
