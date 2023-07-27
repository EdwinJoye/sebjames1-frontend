import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useParams, useLocation } from "react-router-dom";
import Cart from "../img/icons/cart-white.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import CloseCross from "../img/icons/close-black.png";
import ArrowBack from "../img/icons/arrowBack-black.png";
import "../css/pages/product.css";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img1");
  const [open, setOpen] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const { referer } = location.state || { referer: "/" };
  const dispatch = useDispatch();
  const { data, loading } = useFetch(`/products/${id}?populate=*`);

  const getGoBackLink = () => {
    if (referer === "portfolio") {
      return `/portfolio/:id`;
    } else if (referer === "shop") {
      return "/shop/1";
    }
    return "/";
  };

  return (
    <div>
      <div className="fadeIn product">
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="product__arrow-container ">
              <Link to={getGoBackLink()}>
                <img
                  className="product__arrow"
                  src={ArrowBack}
                  alt="arrowBack"
                />
              </Link>
            </div>
            <div className="product__all-container">
              {data?.attributes && (
                <div className="product__left">
                  {data?.attributes && (
                    <img
                      className="product__img-painting"
                      src={data?.attributes?.img1?.data[0]?.attributes?.url}
                      alt="img1"
                      onClick={() => setSelectedImg("img1")}
                    />
                  )}
                  {/* {data?.attributes && (
                    <img
                      className="product__img-painting"
                      src={data?.attributes?.img2?.data[0]?.attributes?.url}
                      alt="img2"
                      onClick={() => setSelectedImg("img2")}
                    />
                  )} */}
                </div>
              )}
              {data?.attributes && (
                <div className="product__center">
                  <img
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className="product__center-img"
                    src={
                      data?.attributes[selectedImg]?.data[0]?.attributes?.url
                    }
                    alt="img"
                  />
                </div>
              )}
              <div className="product__right">
                <h2>{data?.attributes?.title}</h2>
                <span>{data?.attributes?.price}$</span>
                <p>
                  Painting by
                  <Link to="/about">
                    <b> SebJames</b>
                  </Link>
                </p>
                <p>60 x 40 cm</p>
                <p className="product__description">
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum est le faux texte standard de l'imprimerie depuis les
                  années 1500, quand un imprimeur anonyme assembla ensemble des
                  morceaux de texte pour réaliser un livre spécimen de polices
                  de texte. Il n'a pas fait que survivre cinq siècles, mais
                  s'est aussi adapté à la bureautique informatique, sans que son
                  contenu n'en soit modifié. Il a été popularisé dans les années
                  1960 grâce à la vente de feuilles Letraset contenant des
                  passages du Lorem Ipsum, et, plus récemment, par son inclusion
                  dans des applications de mise en page de texte, comme Aldus
                  PageMaker.
                </p>
                <div className="product__quantity">
                  <button
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                  >
                    -
                  </button>
                  <div>{quantity}</div>
                  <button onClick={() => setQuantity((prev) => prev + 1)}>
                    +
                  </button>
                </div>
                <div
                  className="product__add-button"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data.id,
                        title: data.attributes.title,
                        desc: data.attributes.description,
                        price: data.attributes.price,
                        img: data.attributes.img1.data[0].attributes.url,
                        quantity,
                      })
                    )
                  }
                >
                  <img src={Cart} alt="cart" />
                  <span>ADD TO CART</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {data?.attributes && (
        <div
          className={`product__overlay-container ${
            open ? "" : "product__none"
          } `}
        >
          <img
            onClick={() => {
              setOpen(false);
            }}
            src={CloseCross}
            className="product__overlay-close-cross"
            alt="closeCross"
          />
          <img
            className="product__overlay-img"
            src={data?.attributes[selectedImg]?.data[0]?.attributes?.url}
            alt="img"
          />
        </div>
      )}
    </div>
  );
};
export default Product;
