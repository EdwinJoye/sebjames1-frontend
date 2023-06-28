import "./App.css";
import React from "react";
import Header from "./components/Header";
import LocationWrapper from "./LocationWrapper";
import ScrollToTop from "./hooks/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <LocationWrapper></LocationWrapper>
      <ScrollToTop></ScrollToTop>
    </Router>
  );
}

export default App;
