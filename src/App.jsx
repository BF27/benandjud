import Landing from "../layout/Landing";
import Shop from "../layout/Shop";
import About from "../layout/About";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";
import { BasketContext } from "../contexts/BasketContext";
import { UpdateBasketContext } from "../contexts/UpdateBasketContext";
import { useState } from "react";

function App() {
  const updateBasket = () => {
    setBasket(JSON.parse(localStorage.getItem('basket')))
  };

  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')));

  return (
    <div className="app">
      <BasketContext.Provider value={basket}>
        <UpdateBasketContext.Provider value={() => updateBasket()}>
        <Landing />
        <Shop />
        <About />
        <Contact />
        <Footer />
        </UpdateBasketContext.Provider>
      </BasketContext.Provider>
    </div>
  );
}
export default App;
