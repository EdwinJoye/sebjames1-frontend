import { Link } from "react-router-dom";
import "../css/header-left.css";

const HeaderLeft = () => {
  return (
    <div className="headerLeft__container-all">
      <Link to="croquis">CROQUIS</Link>
      <Link to="gravures">GRAVURES</Link>
      <Link to="fresques">FRESQUES</Link>
    </div>
  );
};

export default HeaderLeft;
