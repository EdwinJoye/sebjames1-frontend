import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header></Header>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Layout;
