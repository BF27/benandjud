import { useState, useEffect } from "react";

import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../../../../utils/initFirebase";

import "./styles/heroSection.css";

const HeroSection = () => {
  const [heroImgUrl, setHeroImgUrl] = useState(null);

  useEffect(() => {
    getDownloadURL(ref(storage, "assets/hero-img.jpg"))
      .then((url) => {
        setHeroImgUrl(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="hero-section pt-5 pb-5 container d-flex flex-column flex-lg-row align-items-center align-items-lg-end gap-5 row-lg">
      <div className="hero-text d-flex align-items-end col-lg">
        <div className="hero-text-container position-relative">
          <img src="/svg/flower.svg" alt="flower-icon" className="flower-icon d-none d-xl-block" /> 
          <h2>
            Where ice cream
            <br className="d-none d-lg-block" /> dreams come true.
          </h2>
          <p>
            Welcome to Ben & Jud's Ice Cream Shop! Indulge in our delicious
            homemade ice cream, crafted with love. Discover a variety of flavors
            and dietary options. Join us for a scoop of happiness!
          </p>
        </div>
      </div>
      <div className="hero-image col-lg">
        <div className="hero-image-container">
          {heroImgUrl && <img src={heroImgUrl} alt="hero" />}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
