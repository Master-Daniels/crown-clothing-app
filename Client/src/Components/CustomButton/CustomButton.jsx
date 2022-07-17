import React from "react";
import "./CustomButton.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  cart,
  inverted,
  ...rest
}) {
  return (
    <button
      className={`${isGoogleSignIn && "google-sign-in"} ${
        inverted && "inverted"
      } ${cart && "cart"} custom-button`}
      {...rest}
    >
      {children}
    </button>
  );
}
