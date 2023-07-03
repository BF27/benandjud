import { BasketContext } from "./contexts/BasketContext";
import { UpdateBasketContext } from "./contexts/UpdateBasketContext";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import OrderSent from "./pages/OrderSent";


function App() {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket"))
  );

  useEffect(()=>{
    if (!basket) {
      localStorage.setItem("basket", JSON.stringify([]))
    }
  }, []);

  const updateBasket = () => {
    setBasket(JSON.parse(localStorage.getItem("basket")));
  };

  return (
    <div className="app">
      <BasketContext.Provider value={basket}>
        <UpdateBasketContext.Provider value={() => updateBasket()}>
          <Routes >
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />}/>
            <Route path="/products/:id" element={<Product />} />
            <Route path="/checkout" element={<Order />} />
            <Route path="/checkout/done" element={<OrderSent />} />
          </Routes>
        </UpdateBasketContext.Provider>
      </BasketContext.Provider>
    </div>
  );
}
export default App;
