import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../src/components/Layout";
import Home from "./pages/Mains/Home";
import About from "./pages/Mains/About";
import Contact from "./pages/Mains/Contact";
import Products from "./pages/Products/Products";
import Product from "./pages/Products/Product";
import Portfolio from "./pages/Arts/Portfolio";
import Shop from "../src/pages/Mains/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    element: <Layout></Layout>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
