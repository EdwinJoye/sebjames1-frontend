import { Link } from "react-router-dom";
import Facebook from "../img/icons/facebook-white.png";
import Pinterest from "../img/icons/pinterest-white.png";
import Instagram from "../img/icons/instagram-white.png";
import LinkedIn from "../img/icons/linkedIn-white.png";
import Send from "../img/icons/send-white.png";
import Signature from "../img/signatureBlanche.png";
import Loupe from "../img/icons/loupe-white.png";
import Bag from "../img/icons/bag-white.png";

import "../css/header.css";

const Header = () => {
  return (
    <div className="header__all-container">
      <div className="header__social-media-container">
        <img src={Facebook} alt="fb" />
        <img src={Pinterest} alt="pint" />
        <img src={Instagram} alt="ins" />
        <img src={LinkedIn} alt="link" />
        <img src={Send} alt="send" />
      </div>

      <div className="header__links-signature-container">
        <div className="header__links-container-1">
          <Link>
            <span>ABOUT</span>
          </Link>
          <Link>
            <span>PORTFOLIO</span>
          </Link>
          <Link>
            <span>COURSES</span>
          </Link>
        </div>
        <div className="header__signature-container">
          <Link>
            <img src={Signature} alt="sign" />
          </Link>
        </div>
        <div className="header__links-container-2">
          <Link>
            <span>ABOUT</span>
          </Link>
          <Link>
            <span>SHOP</span>
          </Link>
          <Link>
            <span>BLOG</span>
          </Link>
        </div>
      </div>

      <div className="header__look-basket-container">
        <img src={Loupe} alt="loupe" />
        <img src={Bag} alt="bag" />
      </div>
    </div>
  );
};
export default Header;
