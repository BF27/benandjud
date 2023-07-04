import { Link } from "react-router-dom";

import "./styles/Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="./svg/logo-01.svg" alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
