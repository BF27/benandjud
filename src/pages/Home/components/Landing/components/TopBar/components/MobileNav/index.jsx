import showNav from "./controller/showNav";
import "./styles/mobileNav.css";

const MobileNav = () => {
  return (
    <nav className="mobile-nav d-lg-none d-flex align-items-center">
      <button
        className="btn mobile-nav-btn"
        type="button"
        onClick={() => showNav()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <ul className="mobile-menu hide">
        <li className="mobile-menu-item">
          <a href="#to-shop">Shop</a>
        </li>
        <li className="mobile-menu-item">
          <a href="#about">Our Story</a>
        </li>
        <li className="mobile-menu-item">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
