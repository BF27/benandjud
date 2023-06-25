import Landing from "../layout/Landing";
import Shop from "../layout/Shop";
import About from "../layout/About";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

import { createContext, useEffect, useState } from "react";

const BasketContext = createContext();

function App() {

  const [basket, setBasket] = useState([]);

  useEffect(() => {
     const basketItems = localStorage.getItem("basket");
    if (basketItems) {
      setBasket(basketItems);
      console.log(basket)
    } else {
      localStorage.setItem("basket", []);
      setBasket([]);
      console.log(basket)
    }
  }, []);

  return (
    <div className="app">
      <BasketContext.Provider value={basket}>
        <Landing />
        <Shop />
        <About />
        <Contact />
        <Footer />
      </BasketContext.Provider>
    </div>
  );
}
export { BasketContext };
export default App;
