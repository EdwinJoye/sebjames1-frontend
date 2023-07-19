import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import Cart from "../img/icons/cart-white.png";
import "../css/pages/product.css";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img1");
  const [quantity, setQuantity] = useState(1);

  const { data, loading } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product__all-container">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="product__left">
            {console.log("Product data", data)}
            {data?.attributes?.img1?.data && (
              <div>
                {data?.attributes?.img1?.data?.map((pic1) => {
                  return (
                    <div key={pic1.id}>
                      <img
                        src={pic1.attributes.url}
                        alt="img1"
                        onClick={() => setSelectedImg("img1")}
                      />
                    </div>
                  );
                })}
              </div>
            )}
            {data?.attributes?.img2?.data && (
              <div>
                {data?.attributes?.img2?.data?.map((pic2) => {
                  return (
                    <div key={pic2.id}>
                      <img
                        src={pic2.attributes.url}
                        alt="img2"
                        onClick={() => setSelectedImg("img2")}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="product__center">
            {/* {data?.attributes[selectedImg]?.data && (
              <div>
                {data?.attributes[selectedImg]?.data?.map((pic) => {
                  return (
                    <div key={pic.id}>
                      <img src={pic?.attributes?.url} alt="img" />
                    </div>
                  );
                })}
              </div>
            )} */}
          </div>
          <div className="product__right">
            <h2>La pensée interne</h2>
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
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte. Il n'a pas
              fait que survivre cinq siècles, mais s'est aussi adapté à la
              bureautique informatique, sans que son contenu n'en soit modifié.
              Il a été popularisé dans les années 1960 grâce à la vente de
              feuilles Letraset contenant des passages du Lorem Ipsum, et, plus
              récemment, par son inclusion dans des applications de mise en page
              de texte, comme Aldus PageMaker.
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
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <div className="product__add-button">
              <img src={Cart} alt="cart" />
              <span>ADD TO CART</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Product;
