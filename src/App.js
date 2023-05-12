import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Achats from "./pages/Achats";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Canvas from "./pages/Canvas";
import Croquis from "./pages/Croquis";
import Fresques from "./pages/Fresques";
import Gravures from "./pages/Gravures";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/achats" element={<Achats></Achats>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/canvas" element={<Canvas></Canvas>}></Route>
        <Route path="/croquis" element={<Croquis></Croquis>}></Route>
        <Route path="/fresques" element={<Fresques></Fresques>}></Route>
        <Route path="/gravures" element={<Gravures></Gravures>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
