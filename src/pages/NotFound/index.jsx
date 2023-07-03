import { Link } from "react-router-dom";

import "./styles/NotFound.css";
import Logo from "../../components/Logo";

const NotFound = () => {
  return (
    <div className="not-found container-fluid m-0 p-0 d-flex flex-column gap-3 align-items-center justify-content-center">
      <Logo />
      <div>Page not found</div>
      <Link to="/">back to home page</Link>
    </div>
  );
};

export default NotFound;
