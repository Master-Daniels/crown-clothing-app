import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../cartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import "./cartDropdown..scss";

function CartDropdown(props) {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
        cart
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default CartDropdown;
