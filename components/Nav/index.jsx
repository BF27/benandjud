import "./styles/nav.css";

const Nav = () => {
  return (
    <nav className="d-flex align-items-center">
      <ul
        className="d-flex align-items-center
      justify-content-center gap-5"
      >
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Our Story</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
