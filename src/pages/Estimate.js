import React from "react";
import EstimateForm from "../components/EstimateForm";
import EstimatePresentation from "../components/EstimatePresentation";
import "../css/pages/estimate.css";

const Estimate = () => {
  const scrollToQuote = () => {
    const quoteElement = document.getElementById("myQuote");
    if (quoteElement) {
      window.scroll({
        top: quoteElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fadeIn">
      <EstimatePresentation
        scrollToQuote={scrollToQuote}
      ></EstimatePresentation>
      <EstimateForm></EstimateForm>
    </div>
  );
};

export default Estimate;
