import React, { useRef } from "react";
import DeleteIcon from "../img/icons/delete-red.png";
import CloseIcon from "../img/icons/close-black.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../redux/cartReducer";
import "../css/components/cart.css";

const Cart = ({ setOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const cartRef = useRef(null);
  const handleCloseCart = (event) => {
    if (event.target === cartRef.current) {
      setOpen(false);
    }
  };

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  return (
    <div className="cart" ref={cartRef} onClick={handleCloseCart}>
      <div
        className={isHome ? "cart__home-all-container" : "cart__all-container"}
      >
        <div className="cart__title-close">
          <h2>Products</h2>
          <img src={CloseIcon} alt="closeIcon" onClick={() => setOpen(false)} />
        </div>
        <div className="cart__ii-container">
          {products?.map((item) => {
            return (
              <div className="cart__img-infos-container" key={item.id}>
                <img className="cart__img" src={item.img} alt="cartImg" />
                <div className="cart__infos-container">
                  <div className="cart__title-icon-container">
                    <div className="cart__title">{item.title}</div>
                    <img
                      className="cart__delete-icon"
                      src={DeleteIcon}
                      alt="delete"
                      onClick={() => dispatch(removeItem(item.id))}
                    />
                  </div>
                  <div className="cart__desc-price-container">
                    <p className="cart__description">
                      {item.desc.substring(0, 100)}
                    </p>
                    <div className="cart__price">
                      {item.quantity} x {item.price} €
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart__total-checkout-container">
          <div className="cart__total">
            <span>SUBTOTAL</span>
            <span>{totalPrice()}€</span>
          </div>
          <Link to="/checkout">
            <button className="cart__checkout-button">
              PROCEED TO CHECKOUT
            </button>
          </Link>
          <span className="cart__reset" onClick={() => dispatch(resetCart())}>
            Reset Cart
          </span>
        </div>
      </div>
    </div>
  );
};
export default Cart;
