import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import "./header.scss";

import { ReactComponent as Logo } from "./crown.svg";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { selectCartHidden } from "../../redux/cart/cartSelectors";

import { signOutStart } from "../../redux/user/userActions";

function Header({ currentUser, hidden, signOut }) {
  return (
    <div className="header">
      <NavLink to="/">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "red",
            fontSize: isActive && "1.2rem",
          })}
          to="/shop"
          className="option"
        >
          SHOP
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "red",
            fontSize: isActive && "1.2rem",
          })}
          to="/contact"
          className="option"
        >
          CONTACT
        </NavLink>
        {currentUser ? (
          <div className="option" onClick={() => signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink className="option" to="/signin">
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
