import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Facebook from "../img/icons/facebook-white.png";
import Pinterest from "../img/icons/pinterest-white.png";
import Instagram from "../img/icons/instagram-white.png";
import LinkedIn from "../img/icons/linkedIn-white.png";
import Send from "../img/icons/send-white.png";
import Signature from "../img/signatures/signature-white.png";
import Loupe from "../img/icons/loupe-white.png";
import Bag from "../img/icons/bag-white.png";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import "../css/components/header.css";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isPortofolio = location.pathname === "/portfolio";
  const isArticles = location.pathname === "/articles";
  const isContact = location.pathname === "/contact";
  const isShop = location.pathname === "/shop/:id";
  const products = useSelector((state) => state.cart.products);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);

  const totalQuantity = () => {
    let quant = 0;
    products.forEach((item) => (quant += item.quantity));
    return quant;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(currentScrollPos < prevScrollPos || currentScrollPos === 0);
      setAtTop(currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={` ${visible ? "header--visible" : "header--hidden"} ${
        atTop ? "header--top" : "header__all-container"
      }`}
    >
      <div className="header__left-container">
        <a
          className={!atTop ? "black-png" : ""}
          href="https://www.facebook.com/seb.james.98"
        >
          <img src={Facebook} alt="fb" />
        </a>
        <a className={!atTop ? "black-png" : ""} href="http://hello.com">
          <img src={Pinterest} alt="pint" />
        </a>
        <a
          className={!atTop ? "black-png" : ""}
          href="https://www.instagram.com/sebjamesart/"
        >
          <img src={Instagram} alt="ins" />
        </a>
        <a className={!atTop ? "black-png" : ""} href="http://hello.com">
          <img src={LinkedIn} alt="link" />
        </a>
        <a className={!atTop ? "black-png" : ""} href="mailto:sebj19@gmail.com">
          <img src={Send} alt="send" />
        </a>
      </div>
      <div className="header__center-container">
        <div className="header__links-container-1">
          <Link to="/about" onClick={() => setOpen(false)}>
            <span className={isAbout ? "white" : ""}>ABOUT</span>
          </Link>
          <Link to="/portfolio/:id" onClick={() => setOpen(false)}>
            <span className={isPortofolio ? "white" : ""}>PORTFOLIO</span>
          </Link>
          <Link to="/articles" onClick={() => setOpen(false)}>
            <span className={isArticles ? "white" : ""}>ARTICLES</span>
          </Link>
        </div>
        <div className="header__signature-container">
          <Link to="/" onClick={() => setOpen(false)}>
            <img
              className={!atTop ? "black-png" : ""}
              src={Signature}
              alt="sign"
            />
            <div className="header__text-line-container">
              <div className="header__signature-line"></div>
              <span className="header__signature-text">fine art & tips</span>
              <div className="header__signature-line"></div>
            </div>
          </Link>
        </div>
        <div className="header__links-container-2">
          <Link to="/" onClick={() => setOpen(false)}>
            <span className={isHome ? "black" : ""}>HOME</span>
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            <span className={isContact ? "white" : ""}>CONTACT</span>
          </Link>
          <Link to="/shop/:id" onClick={() => setOpen(false)}>
            <span className={isShop ? "white" : ""}>SHOP</span>
          </Link>
        </div>
      </div>

      <div className="header__right-container">
        <a className={!atTop ? "black-png" : ""} href="http://hello.com">
          <img src={Loupe} alt="loupe" />
        </a>
        <div className="cartIcon" onClick={() => setOpen(!open)}>
          <img className={!atTop ? "black-png" : ""} src={Bag} alt="bag" />
          <span>{totalQuantity()}</span>
        </div>
      </div>
      {open && <Cart setOpen={setOpen}></Cart>}
    </div>
  );
};
export default Header;
