import React from "react";
import { useState, useEffect } from "react";
import Propositions from "../components/Propositions";
import FeaturedProducts from "../components/FeaturedProducts";
import Test from "../components/Test";
import "../css/pages/home.css";

const HomeTest = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = 1400;
    const opacity = scrollY / maxScroll;
    setScrollOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBackgroundColor = () => {
    const maxOpacity = 1; // Maximum opacity value when the background becomes fully dark/black
    const opacityValue = maxOpacity * scrollOpacity;
    return `rgba(0, 0, 0, ${opacityValue})`;
  };

  return (
    <div
      className="home__all-container"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="home__img-bg">
        <img
          className="home__img"
          src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1690366008/sebjames/screen_1_e0bf17cd53.jpg"
          alt=""
        />
      </div>
      <div className="home__content-container">
        <div className="home__top-container"> HELLO SEB JAMES</div>
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
export default HomeTest;
