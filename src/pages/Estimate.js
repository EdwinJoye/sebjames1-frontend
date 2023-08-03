import React from "react";
import EstimateForm from "../components/EstimateForm";
import EstimatePresentation from "../components/EstimatePresentation";
import Footer from "../components/Footer";
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
    <div className="estimate fadeIn">
      <div className="estimate__all-container">
        <EstimatePresentation
          scrollToQuote={scrollToQuote}
        ></EstimatePresentation>
        <EstimateForm />
      </div>
      <Footer />
    </div>
  );
};

export default Estimate;
