import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Facebook from "../img/icons/facebook-white.png";
import Pinterest from "../img/icons/pinterest-white.png";
import Instagram from "../img/icons/instagram-white.png";
import LinkedIn from "../img/icons/linkedIn-white.png";
import Send from "../img/icons/send-white.png";
import SignatureBlack from "../img/signatures/signature-black.png";
import SignatureWhite from "../img/signatures/signature-white.png";
import Loupe from "../img/icons/loupe-white.png";
import Bag from "../img/icons/bag-white.png";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import "../css/components/header.css";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isByographie = location.pathname === "/biography";
  const isExhibition = location.pathname === "/exhibitions";
  const isArticles = location.pathname === "/articles";
  const isInterviews = location.pathname === "/interviews";
  const isPortofolio = location.pathname === "/portfolio/:id";
  const isWorks = location.pathname === "/works";
  const isEstimate = location.pathname === "/estimate";
  const isContact = location.pathname === "/contact";
  const isShop = location.pathname === "/shop/:id";
  const isCheckout = location.pathname === "/checkout";

  const products = useSelector((state) => state.cart.products);
  const categories = useFetch(`/categories?populate=*`);

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
      className={`${visible ? "header--visible" : "header--hidden"} ${
        atTop ? "header__top" : "header__all-container"
      } ${isHome ? "header__home" : "header__else"}`}
    >
      <div className="header__left-container">
        <a href="https://www.facebook.com/seb.james.98">
          <img src={Facebook} alt="fb" />
        </a>
        <a href="https://www.pinterest.fr/sebj19/">
          <img src={Pinterest} alt="pint" />
        </a>
        <a href="https://www.instagram.com/sebjamesart/">
          <img src={Instagram} alt="ins" />
        </a>
        <a href="https://www.linkedin.com/in/s%C3%A9bastien-james-8a675992/">
          <img src={LinkedIn} alt="link" />
        </a>
        <a href="mailto:sebj19@gmail.com">
          <img src={Send} alt="send" />
        </a>
      </div>
      <div className="header__center-container">
        <div className="header__links-container-1">
          <div className="header__dropdown">
            <Link
              className="header__span-container"
              to="/biography"
              onClick={() => setOpen(false)}
            >
              <span>ABOUT</span>
              <div
                className={`header__underline ${
                  isExhibition ? "opacityOn" : ""
                } ${isArticles ? "opacityOn" : ""} ${
                  isByographie ? "opacityOn" : ""
                } ${isInterviews ? "opacityOn" : ""}`}
              ></div>
            </Link>
            <div className="header__dropdown-content">
              <Link to="/biography">
                <div>
                  <span>BIOGRAPHY</span>
                </div>
              </Link>
              <Link to="/exhibitions">
                <div>
                  <span>EXHIBITIONS</span>
                </div>
              </Link>
              <Link to="/articles">
                <div>
                  <span>ARTICLES</span>
                </div>
              </Link>
              <Link to="/interviews">
                <div>
                  <span>INTERVIEWS</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="header__dropdown">
            <Link
              className="header__span-container"
              to="/portfolio/:id"
              onClick={() => setOpen(false)}
            >
              <span>PORTFOLIO</span>
              <div
                className={`header__underline ${
                  isPortofolio ? "opacityOn" : ""
                }`}
              ></div>
            </Link>
            <div className="header__dropdown-content">
              {categories?.data?.map((item) => {
                return (
                  <Link key={item.id} to="/portfolio/:id" categoryId={item.id}>
                    <div>
                      <span>{item.attributes.title}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="header__dropdown">
            <Link
              className="header__span-container"
              to="/works"
              onClick={() => setOpen(false)}
            >
              <span>FRESCOE</span>
              <div
                className={`header__underline ${isWorks ? "opacityOn" : ""} ${
                  isEstimate ? "opacityOn" : ""
                }`}
              ></div>
            </Link>
            <div className="header__dropdown-content">
              <Link to="/works">
                <div>
                  <span>WORKS</span>
                </div>
              </Link>
              <Link to="/estimate">
                <div>
                  <span>ESTIMATE</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="header__signature-container">
          <Link to="/" onClick={() => setOpen(false)}>
            <img
              className={isHome ? "none" : ""}
              src={SignatureBlack}
              alt="sign"
            />
            <img
              className={isHome ? "" : "none"}
              src={SignatureWhite}
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
          <Link
            className="header__span-container"
            to="/"
            onClick={() => setOpen(false)}
          >
            <span>HOME</span>
          </Link>
          <Link
            className="header__span-container"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            <span>CONTACT</span>
            <div
              className={`header__underline ${isContact ? "opacityOn" : ""}`}
            ></div>
          </Link>
          <div className="header__dropdown">
            <Link
              className="header__span-container"
              to="/shop/:id"
              onClick={() => setOpen(false)}
            >
              <span>SHOP</span>
              <div
                className={`header__underline ${isShop ? "opacityOn" : ""} ${
                  isCheckout ? "opacityOn" : ""
                }`}
              ></div>
            </Link>
            <div className="header__dropdown-content">
              <Link to="/shop/:id">
                <div>
                  <span>ITEMS</span>
                </div>
              </Link>
              <Link to="/checkout">
                <div>
                  <span>CHECKOUT</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header__right-container">
        <a href="http://hello.com">
          <img src={Loupe} alt="loupe" />
        </a>
        <div className="cartIcon" onClick={() => setOpen(!open)}>
          <img src={Bag} alt="bag" />
          <span>{totalQuantity()}</span>
        </div>
      </div>
      {open && <Cart setOpen={setOpen}></Cart>}
    </div>
  );
};
export default Header;
