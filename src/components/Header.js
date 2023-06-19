import { Link } from "react-router-dom";
import Facebook from "../img/icons/facebook-white.png";
import Pinterest from "../img/icons/pinterest-white.png";
import Instagram from "../img/icons/instagram-white.png";
import LinkedIn from "../img/icons/linkedIn-white.png";
import Send from "../img/icons/send-white.png";
import Signature from "../img/signatures/signature-white.png";
import Loupe from "../img/icons/loupe-white.png";
import Bag from "../img/icons/bag-white.png";
import "../css/components/header.css";

const Header = () => {
  return (
    <div className="header__all-container">
      <div className="header__left-container">
        <img src={Facebook} alt="fb" />
        <img src={Pinterest} alt="pint" />
        <img src={Instagram} alt="ins" />
        <img src={LinkedIn} alt="link" />
        <img src={Send} alt="send" />
      </div>

      <div className="header__center-container">
        <div className="header__links-container-1">
          <Link to="about">
            <span>ABOUT</span>
          </Link>
          <Link to="/portfolio">
            <span>PORTFOLIO</span>
          </Link>
          <Link>
            <span>COURSES</span>
          </Link>
        </div>
        <div className="header__signature-container">
          <Link to="/">
            <img src={Signature} alt="sign" />
          </Link>
        </div>
        <div className="header__links-container-2">
          <Link to="home">
            <span>HOME</span>
          </Link>
          <Link>
            <span>SHOP</span>
          </Link>
          <Link>
            <span>ARTICLES</span>
          </Link>
        </div>
      </div>

      <div className="header__right-container">
        <img src={Loupe} alt="loupe" />

        <div className="cartIcon">
          <img src={Bag} alt="bag" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
