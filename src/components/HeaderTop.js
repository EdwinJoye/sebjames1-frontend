import { Link } from "react-router-dom";
import "../css/header-top.css";

const Header = () => {
  return (
    <div className="header__container-all">
      <div className="header__container-1">
        <Link to="/">HOME</Link>
      </div>
      <div className="header__container-2">
        <Link to="/about">ABOUT</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/achats">ACHATS</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};
export default Header;
