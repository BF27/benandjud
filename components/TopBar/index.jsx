import Logo from "../Logo";
import Nav from "../Nav";
import Basket from "../Basket";
import MobileNav from "../MobileNav";

import "./styles/topBar.css";

const TopBar = () => {
  return (
    <div className="top-bar container d-flex justify-content-between justify-content-sm-between ">
      <Logo />
      <Nav />
      <div className="d-flex flex-sm-grow-2 flex-lg-grow-0 justify-content-end gap-sm-5">
        <Basket />
        <MobileNav />
      </div>
    </div>
  );
};

export default TopBar;
