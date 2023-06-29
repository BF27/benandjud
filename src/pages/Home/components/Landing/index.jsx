import HeroSection from "./components/HeroSection";
import TopBar from "./components/TopBar";

import "./styles/landing.css"

const Landing = () => {
  return (
    <section id="landing" className="landing">
      <div className="container">
        <TopBar />
        <HeroSection />
      </div>
    </section>
  );
};

export default Landing;
