import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "../src/pages/Contact";
import Shop from "../src/pages/Shop";
import Portfolio from "./pages/Portfolio";
import Articles from "../src/pages/Articles";
import Products from "../src/pages/Products";
import Product from "./pages/Product";
import Test from "../src/Test";

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
      <Route path="/test" element={<Test></Test>}></Route>
    </Routes>
  );
}

export default LocationWrapper;
