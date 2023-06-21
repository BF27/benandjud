import Logo from "../Logo";
import Nav from "../Nav";

import "./styles/topBar.css"

const TopBar = () => {
  return (
    <div className="top-bar container d-flex ">
      <Logo />
      <Nav />
    </div>
  )
}

export default TopBar
