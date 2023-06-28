import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
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

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div
      className={`header__all-container-black ${
        visible ? "navbar--visible" : "navbar--hidden"
      }`}
    >
      <div
        className={
          !isHome
            ? "header__left-container-black"
            : "header__left-container-white"
        }
      >
        <a
          className={!isHome ? "black-png" : ""}
          href="https://www.facebook.com/seb.james.98"
        >
          <img src={Facebook} alt="fb" />
        </a>
        <a className={!isHome ? "black-png" : ""} href="http://hello.com">
          <img src={Pinterest} alt="pint" />
        </a>
        <a
          className={!isHome ? "black-png" : ""}
          href="https://www.instagram.com/sebjamesart/"
        >
          <img src={Instagram} alt="ins" />
        </a>
        <a className={!isHome ? "black-png" : ""} href="http://hello.com">
          <img src={LinkedIn} alt="link" />
        </a>
        <a
          className={!isHome ? "black-png" : ""}
          href="mailto:sebj19@gmail.com"
        >
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
            <span className={isHome ? "black" : ""}>HOME</span>
          </Link>
          <Link to="/contact">
            <span className={isContact ? "white" : ""}>CONTACT</span>
          </Link>
          <Link to="/shop">
            <span className={isShop ? "white" : ""}>SHOP</span>
          </Link>
        </div>
      </div>

      <div
        className={
          isHome
            ? "header__right-container-white"
            : "header__right-container-black"
        }
      >
        <a className={!isHome ? "black-png" : ""} href="http://hello.com">
          <img src={Loupe} alt="loupe" />
        </a>
        <div className="cartIcon">
          <a className={!isHome ? "black-png" : ""} href="http://hello.com">
            <img src={Bag} alt="bag" />
          </a>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
