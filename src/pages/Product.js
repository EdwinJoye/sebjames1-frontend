import { useState } from "react";
import "../css/pages/product.css";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const images = [
    "https://res.cloudinary.com/dm0sv9nfx/image/upload/v1687277100/sebjames/gravure_10_72354e0901.jpg",
    "https://res.cloudinary.com/dm0sv9nfx/image/upload/v1687277111/sebjames/gravure_11_c0480614a0.jpg",
  ];
  return (
    <div className="product__all-container">
      <div className="product__left">
        <img src={images[0]} alt="img1" onClick={() => setSelectedImg(0)} />
        <img src={images[1]} alt="img2" onClick={() => setSelectedImg(1)} />
      </div>
      <div className="product__center">
        <img src={images[selectedImg]} alt="img2" />
      </div>
      <div className="product__right">
        <h2>product</h2>
        <span>299$</span>
      </div>
    </div>
  );
};
export default Product;
