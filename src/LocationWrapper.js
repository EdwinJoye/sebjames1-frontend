import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Contact from "../src/pages/Contact";
import Shop from "../src/pages/Shop";
import Portfolio from "./pages/Portfolio";
import Articles from "../src/pages/Articles";
import Works from "../src/pages/Works";
import Estimate from "../src/pages/Estimate";
import Exhibitions from "./pages/Exhibitions";
import Interviews from "./pages/Interviews";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Test from "./pages/Test";

function LocationWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/biography" element={<Biography></Biography>}></Route>
      <Route path="/exhibitions" element={<Exhibitions></Exhibitions>}></Route>
      <Route path="/interviews" element={<Interviews></Interviews>}></Route>
      <Route path="/articles" element={<Articles></Articles>}></Route>
      <Route path="/works" element={<Works></Works>}></Route>
      <Route path="/estimate" element={<Estimate></Estimate>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/shop/:id" element={<Shop></Shop>}></Route>
      <Route path="/portfolio/:id" element={<Portfolio></Portfolio>}></Route>
      <Route path="/product/:id" element={<Product></Product>}></Route>
      <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      <Route path="/test" element={<Test></Test>}></Route>
    </Routes>
  );
}

export default LocationWrapper;
