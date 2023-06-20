import { Routes, Route } from "react-router-dom";
import Home from "./pages/Mains/Home";
import About from "../src/pages/Mains/About";
import Contact from "../src/pages/Mains/Contact";
import Shop from "../src/pages/Mains/Shop";
import Portfolio from "./pages/Mains/Portfolio";
import Articles from "../src/pages/Mains/Articles";
import Products from "../src/pages/Products/Products";
import Product from "../src/pages/Products/Product";

function LocationWrapper() {
  // const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/articles" element={<Articles></Articles>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/shop" element={<Shop></Shop>}></Route>
      <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
      <Route path="/products/:id" element={<Products></Products>}></Route>
      <Route path="/product/:id" element={<Product></Product>}></Route>
    </Routes>
  );
}

export default LocationWrapper;
