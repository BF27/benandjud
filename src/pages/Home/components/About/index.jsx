import "./styles/about.css";

const About = () => {
  return (
    <section id="about" className="about container-fluid">
      <header className="container-fluid d-flex align-items-center justify-content-center">
        <h2 className="d-flex align-items-start justify-content-center">Our Story</h2>
      </header>
      <div className="about-container container d-flex flex-column flex-sm-row gap-5 position-relative">
        <p className="about-cols about-bold">
          Nestled in the heart of our town, Ben And Jud's Ice Cream Shop is a
          labor of love crafted by best friends Ben and Jud. Fueled by their
          passion for creating exceptional frozen treats, they embarked on a
          journey to bring joy to the taste buds of ice cream enthusiasts far
          and wide. With unwavering dedication to quality, they carefully select
          the finest ingredients and perfect unique flavor combinations that
          leave a lasting impression.
        </p>
        <p className="about-cols wide">
          Step through our doors and be enveloped in an ambiance of warmth and
          nostalgia, reminiscent of the old-fashioned ice cream parlors that
          inspired us. The tantalizing aroma of freshly baked waffle cones
          beckons you to indulge in an unforgettable sensory experience. Every
          scoop we serve is a testament to our commitment to excellence, where
          creativity and passion shine through in each and every delightful
          creation. At Ben And Jud's, we believe that ice cream should be
          enjoyed by everyone. That's why we offer a diverse range of options to
          accommodate different dietary needs, ensuring that no one misses out
          on the sheer delight of our frozen delights. Join us as we celebrate
          the timeless tradition of ice cream, and let our scoops transport you
          to a realm of pure bliss that will create sweet memories to cherish.
        </p>
        <img src="/svg/flower.svg" alt="flower icon" className="flower-icon position-absolute d-none d-xl-block" />
      </div>
    </section>
  );
};

export default About;
