import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function scrollToQuote() {
  const quoteElement = document.getElementById("myQuote");
  if (quoteElement) {
    window.scroll({
      top: quoteElement.offsetTop,
      behavior: "smooth",
    });
  }

  return null;
}
