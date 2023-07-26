import React from "react";
import { useState, useEffect } from "react";
import Propositions from "../components/Propositions";
import FeaturedProducts from "../components/FeaturedProducts";
import Test from "../components/Test";
import "../css/pages/home.css";

const Home = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  const handleScrollSticky = () => {
    const scrollHeight = window.innerHeight * 1.2;

    if (window.scrollY >= scrollHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = 1400;
    const opacity = scrollY / maxScroll;
    setScrollOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, handleScrollSticky);
    return () => {
      window.removeEventListener("scroll", handleScroll, handleScrollSticky);
    };
  }, []);

  const getBackgroundColor = () => {
    const maxOpacity = 0.8;
    const opacityValue = maxOpacity * scrollOpacity;
    return `rgba(19, 19, 19, ${opacityValue})`;
  };

  return (
    <div
      className="home__all-container fadeIn"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className={`home__img-bg ${isSticky ? "sticky" : "fixed"}`}>
        <img
          className="home__img"
          src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1690366008/sebjames/screen_1_e0bf17cd53.jpg"
          alt=""
        />
      </div>
      <div className="home__content-container">
        <div className="home__top-container">
          <div className="home__title">
            <div>
              <span>Welcome in the</span>
            </div>
            <div className="home__title-secondPart">
              <h1>WORLD</h1> <span>of</span>
            </div>
            <h1>SEB JAMES</h1>
          </div>
        </div>
        <div>
          <Propositions></Propositions>
          <FeaturedProducts type={"available"}></FeaturedProducts>
          <FeaturedProducts type={"new"}></FeaturedProducts>
          <Test subCategories={"trending"}></Test>
        </div>
      </div>
    </div>
  );
};
export default Home;
