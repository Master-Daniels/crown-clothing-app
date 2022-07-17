import React from "react";
import { ReactComponent as ShoppingIcon } from "./shopping-bag.svg";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import "./cartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  const element = (
    <div
      className="cart-icon"
      onClick={() => {
        toggleCartHidden();
      }}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
  return element;
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
