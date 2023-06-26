import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Facebook from "../img/icons/facebook-white.png";
import Pinterest from "../img/icons/pinterest-white.png";
import Instagram from "../img/icons/instagram-white.png";
import LinkedIn from "../img/icons/linkedIn-white.png";
import Send from "../img/icons/send-white.png";
import SignatureWhite from "../img/signatures/signature-white.png";
import SignatureBlack from "../img/signatures/signature-black.png";
import Loupe from "../img/icons/loupe-white.png";
import Bag from "../img/icons/bag-white.png";
import "../css/components/header.css";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isPortofolio = location.pathname === "/portfolio";
  const isArticles = location.pathname === "/articles";
  const isContact = location.pathname === "/contact";
  const isShop = location.pathname === "/shop";

  return (
    <div
      className={
        isHome ? "header__all-container-white" : "header__all-container-black"
      }
    >
      <div className="header__left-container">
        <a href="https://www.facebook.com/seb.james.98">
          <img src={Facebook} alt="fb" />
        </a>
        <img src={Pinterest} alt="pint" />
        <a href="https://www.instagram.com/sebjamesart/">
          <img src={Instagram} alt="ins" />
        </a>
        <img src={LinkedIn} alt="link" />
        <a className="contact__button" href="mailto:sebj19@gmail.com">
          <img src={Send} alt="send" />
        </a>
      </div>
      <div className="header__center-container">
        <div className="header__links-container-1">
          <Link to="/about">
            <span className={isAbout ? "white" : ""}>ABOUT</span>
          </Link>
          <Link to="/portfolio">
            <span className={isPortofolio ? "white" : ""}>PORTFOLIO</span>
          </Link>
          <Link to="/articles">
            <span className={isArticles ? "white" : ""}>ARTICLES</span>
          </Link>
        </div>
        <div className="header__signature-container">
          <Link to="/">
            <img
              className={isHome ? "block" : "none"}
              src={SignatureWhite}
              alt="sign"
            />
            <img
              className={isHome ? "none" : "block"}
              src={SignatureBlack}
              alt="sign"
            />
            <div className="header__text-line-container">
              <div
                className={
                  isHome
                    ? "header__signature-line-white"
                    : "header__signature-line-black"
                }
              ></div>
              <span className="header__signature-text">fine art & tips</span>
              <div
                className={
                  isHome
                    ? "header__signature-line-white"
                    : "header__signature-line-black"
                }
              ></div>
            </div>
          </Link>
        </div>
        <div className="header__links-container-2">
          <Link to="/">
            <span className={isHome ? "white" : ""}>HOME</span>
          </Link>
          <Link to="/contact">
            <span className={isContact ? "white" : ""}>CONTACT</span>
          </Link>
          <Link to="/shop">
            <span className={isShop ? "white" : ""}>SHOP</span>
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
