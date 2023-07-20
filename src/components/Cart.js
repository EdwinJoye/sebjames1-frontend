import React from "react";
import DeleteIcon from "../img/icons/delete-red.png";
import { useSelector } from "react-redux";
import "../css/components/cart.css";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="cart__all-container">
      <h2>Product in you cart</h2>
      {products.map((item) => {
        return (
          <div className="cart__img-infos-container" key={item.id}>
            <img className="cart__img" src={item.img1} alt="cartImg" />
            <div className="cart__infos-container">
              <div className="cart__title-icon-container">
                <div className="cart__title">{item.title}</div>
                <img className="cart__delete-icon" src={DeleteIcon} alt="" />
              </div>
              <div className="cart__price-container">
                <p>{item.description.substring(0, 100)}</p>
                <div className="cart__price">1 x {item.price} €</div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="cart__total-checkout-container">
        <div className="cart__total">
          <span>SUBTOTAL</span>
          <span>150€</span>
        </div>
        <button className="cart__checkout-button">PROCEED TO CHECKOUT</button>
        <span className="cart__reset">Reset Cart</span>
      </div>
    </div>
  );
};
export default Cart;
