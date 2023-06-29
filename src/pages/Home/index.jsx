import Landing from "./components/Landing";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main className="container-fluid p-0">
      <Landing />
      <Shop />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
