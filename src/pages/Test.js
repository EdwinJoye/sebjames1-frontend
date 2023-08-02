import React from "react";
import { gsap } from "gsap";
import "../css/pages/test.css";

const Test = () => {
  gsap.to(".circle", {
    y: 300,
    backgroundColor: "blue",
    duration: 5,
    repeat: 3,
  });

  return (
    <div className="container">
      <div>TEST ??</div>
      <div className="circle"></div>
    </div>
  );
};

export default Test;
