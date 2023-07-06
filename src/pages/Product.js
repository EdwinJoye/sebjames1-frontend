import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../img/icons/cart-white.png";
import "../css/pages/product.css";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

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
        <h2>La pensée interne</h2>
        <span>299$</span>
        <p>
          Painting by
          <Link to="/about">
            <b> SebJames</b>
          </Link>
        </p>
        <p>60 x 40 cm</p>
        <p className="product__description">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que
          survivre cinq siècles, mais s'est aussi adapté à la bureautique
          informatique, sans que son contenu n'en soit modifié. Il a été
          popularisé dans les années 1960 grâce à la vente de feuilles Letraset
          contenant des passages du Lorem Ipsum, et, plus récemment, par son
          inclusion dans des applications de mise en page de texte, comme Aldus
          PageMaker.
        </p>
        <div className="product__quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <div>{quantity}</div>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div className="product__add-button">
          <img src={Cart} alt="cart" />
          <span>ADD TO CART</span>
        </div>
      </div>
    </div>
  );
};
export default Product;
