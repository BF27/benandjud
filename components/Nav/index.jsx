import "./styles/nav.css";

const Nav = () => {
  return (
    <nav className="d-lg-flex desktop-nav d-none align-items-center" >
      <ul
        className="d-flex align-items-center
      justify-content-center"
      >
        <li className="title">
          <a href="#to-shop">Shop</a>
        </li>
        <li>
          <a href="#about">Our Story</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
