import ProductCard from "../../components/ProductCard";
import "./styles/shop.css";

const Shop = () => {
  return (
    <section id="shop" className="shop container-fluid position-relative">
      <div className="container">
        <h2 className="text-center">Shop</h2>
        <div className="product-card-container d-flex flex-wrap">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default Shop;
