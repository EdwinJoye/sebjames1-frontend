import React from "react";
import { useState, useEffect } from "react";
import Propositions from "../components/Propositions";
import FeaturedProducts from "../components/FeaturedProducts";
import Test from "../components/Test";
import "../css/pages/home.css";

const Home = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  // const [isSticky, setIsSticky] = useState(true);

  // const handleScrollSticky = () => {
  //   const scrollHeight = window.innerHeight * 1.2;

  //   if (window.scrollY >= scrollHeight) {
  //     setIsSticky(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  // };
  const handleScrollOpacity = () => {
    const scrollY = window.scrollY;
    const maxScroll = 800;
    const opacity = scrollY / maxScroll;
    setScrollOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollOpacity);
    return () => {
      window.removeEventListener("scroll", handleScrollOpacity);
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
      <div className={`home__img-bg fixed`}>
        {/* ${isSticky ? "sticky" : "fixed"} */}
        <img
          className="home__img"
          src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1690450553/sebjames/screen_1_08d919b796.jpg"
          alt="homeBg"
        />
      </div>
      <div className="home__content-container">
        <div className="home__top-container">
          <div className="home__title">
            <div className="home__title-1">
              <span>Welcome in the</span>
            </div>
            <div className="home__title-2">
              <h1>WORLD</h1>
              <div>
                <span>of</span>
              </div>
            </div>
            <div className="home__title-3">
              <h1>SEB JAMES</h1>
            </div>
          </div>
          <div className="home__texte-container">
            <div className="home__texte-1">
              Seb James est un artiste aux multiples facettes <br />
              qui exerçe son métier avec passion depuis <br />
              l'enfance. Aquarelliste, illustrateur, <br />
            </div>
            <div className="home__texte-2">
              peintre ou graveur, son univers est essentiellement <br />
              urbain, parfois classique, souvent fantaisiste, <br />
              intriguant, voire psychédélique...
              <br />
            </div>
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
