import Landing from "../layout/Landing";
import Shop from "../layout/Shop";
import About from "../layout/About";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

import { useEffect, useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const basketItems = localStorage.getItem("basket");
    if (basketItems) {
      setBasket(basketItems);
    } else {
      localStorage.setItem("basket", []);
      setBasket([]);
    }
  }, []);

  return (
    <div className="app">
      <Landing />
      <Shop />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
