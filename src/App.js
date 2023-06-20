import "./App.css";
import React from "react";
import Header from "./components/Header";
import LocationWrapper from "./LocationWrapper";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  let isActive = 0;
  return (
    <Router>
      <Header></Header>
      <LocationWrapper isActive={isActive}></LocationWrapper>
      <ScrollToTop></ScrollToTop>
    </Router>
  );
}

export default App;
