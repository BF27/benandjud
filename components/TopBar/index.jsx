import Logo from "../logo"
import Nav from "../Nav";

import "./styles/topBar.css"

const TopBar = () => {
  return (
    <div className="top-bar">
      <Logo />
      <Nav />
    </div>
  )
}

export default TopBar
