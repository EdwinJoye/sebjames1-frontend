import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Contact from "../src/pages/Contact";
import Shop from "../src/pages/Shop";
import Portfolio from "./pages/Portfolio";
import Articles from "../src/pages/Articles";
import Product from "./pages/Product";
import Test from "../src/Test";

function LocationWrapper() {
  // const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/biography" element={<Biography></Biography>}></Route>
      <Route path="/articles" element={<Articles></Articles>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/shop/:id" element={<Shop></Shop>}></Route>
      <Route path="/portfolio/:id" element={<Portfolio></Portfolio>}></Route>
      <Route path="/product/:id" element={<Product></Product>}></Route>
      <Route path="/test" element={<Test></Test>}></Route>
    </Routes>
  );
}

export default LocationWrapper;
