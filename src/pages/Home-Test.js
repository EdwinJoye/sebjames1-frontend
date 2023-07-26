import React from "react";
import { useState, useEffect } from "react";
import Propositions from "../components/Propositions";
import FeaturedProducts from "../components/FeaturedProducts";
import Test from "../components/Test";
import "../css/pages/home.css";

const HomeTest = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="header" style={{ opacity: scrollPosition / 1912 }}>
        <img
          className="home__img"
          src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1690366008/sebjames/screen_1_e0bf17cd53.jpg"
          alt=""
        />
      </div>
      <div className="content">
        {" "}
        <Propositions></Propositions>
        <FeaturedProducts type={"available"}></FeaturedProducts>
        <FeaturedProducts type={"new"}></FeaturedProducts>
        <Test subCategories={"trending"}></Test>
      </div>
    </div>
  );
};
export default HomeTest;
