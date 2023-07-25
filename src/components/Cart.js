import React from "react";
import DeleteIcon from "../img/icons/delete-red.png";
import CloseIcon from "../img/icons/close-black.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from "../redux/cartReducer";
import "../css/components/cart.css";

const Cart = ({ setOpen }) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  return (
    <div className="cart__all-container">
      <div className="cart__title-close">
        <h2>Product in you cart</h2>
        <img src={CloseIcon} alt="closeIcon" onClick={() => setOpen(false)} />
      </div>
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
              <div className="cart__price-container">
                <p>{item.desc.substring(0, 100)}</p>
                <div className="cart__price">
                  {item.quantity} x {item.price} €
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="cart__total-checkout-container">
        <div className="cart__total">
          <span>SUBTOTAL</span>
          <span>{totalPrice()}€</span>
        </div>
        <Link to="/checkout">
          <button className="cart__checkout-button">PROCEED TO CHECKOUT</button>
        </Link>
        <span className="cart__reset" onClick={() => dispatch(resetCart())}>
          Reset Cart
        </span>
      </div>
    </div>
  );
};
export default Cart;
