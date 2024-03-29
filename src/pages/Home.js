import React, { useEffect, useRef, useState } from "react";
import Propositions from "../components/Propositions";
import FeaturedProducts from "../components/FeaturedProducts";
import TestPropositions from "../components/TestPropositions";
import ArrowDown from "../img/icons/arrowDown-white.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/pages/home.css";

const Home = () => {
  const refBackground = useRef(null);
  const [myQuote, setMyQuote] = useState("");

  const scrollToQuote = () => {
    const quoteElement = document.getElementById("proposition");
    if (quoteElement) {
      window.scroll({
        top: quoteElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleButtonClick = (newQuote) => {
    scrollToQuote(); // Première action
    setMyQuote(newQuote); // Deuxième action avec le nouveau mot
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = refBackground.current;
    const opacityAnimation = gsap.to(element, {
      backgroundColor: "rgba(0,0,0,1)",
      scrollTrigger: {
        trigger: element,
        start: "top+=200px top", // Commence l'animation dès que l'élément entre dans la fenêtre
        end: "center bottom", // Termine l'animation lorsque l'élément sort de la fenêtre
        scrub: true, // L'animation suit le défilement du début à la fin
      },
    });
  }, []);

  return (
    <div
      className="home__all-container fadeIn"
      ref={refBackground}
      style={{ backgroundColor: "rgba(0,0,0,0)" }}
    >
      <div className={`home__img-bg fixed`}>
        {console.log("HOME MY QUOTE", myQuote)}
        <img
          className="home__img"
          src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1690450553/sebjames/screen_1_08d919b796.jpg"
          alt="homeBg"
        />
      </div>
      <div
        href="#"
        onClick={() => handleButtonClick("proposition")}
        className="home__icon-container"
      >
        <img className="home__icon" src={ArrowDown} alt="arrow" />
      </div>
      <div className="home__content-container">
        <div className="home__top-container">
          <div className="home__title">
            <div className="home__title-1">
              <span>Welcome in the</span>
            </div>
            <div className="home__title-2">
              <h1>WORLD</h1>
              <>
                <span>of</span>
              </>
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
        <Propositions></Propositions>
        <FeaturedProducts type={"available"}></FeaturedProducts>
        <FeaturedProducts type={"new"}></FeaturedProducts>
        <TestPropositions subCategories={"trending"}></TestPropositions>
        <div className="home__end-container"></div>
      </div>
    </div>
  );
};
export default Home;
