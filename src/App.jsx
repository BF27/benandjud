import { BasketContext } from "./contexts/BasketContext";
import { UpdateBasketContext } from "./contexts/UpdateBasketContext";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Order from "./pages/Order";


function App() {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket"))
  );

  const updateBasket = () => {
    setBasket(JSON.parse(localStorage.getItem("basket")));
  };

  return (
    <div className="app">
      <BasketContext.Provider value={basket}>
        <UpdateBasketContext.Provider value={() => updateBasket()}>
          <Routes >
            <Route path="/" element={<Home />}/>
            <Route path="/products/:id" element={<Product />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </UpdateBasketContext.Provider>
      </BasketContext.Provider>
    </div>
  );
}
export default App;
