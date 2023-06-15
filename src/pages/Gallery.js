import Header from "../components/Header";
import HeaderLeft from "../components/HeaderLeft";
import "../css/gallery.css";

const Gallery = () => {
  return (
    <div>
      <Header></Header>
      <div className="gallery__container-main">
        <div className="gallery__container-1">
          <HeaderLeft></HeaderLeft>
        </div>
        <div className="gallery__container-2">Gallery</div>
      </div>
    </div>
  );
};
export default Gallery;
