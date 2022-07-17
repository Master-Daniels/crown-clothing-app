import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "./favicon.ico";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Kr3ImLZp9DZqlh9CQuI6WTS0H78BgSZ71WlsYTg1Sr1gffHiTiosbb70Slgvp5x14xnerdCKr67qKktI7WkzbyS00yfHUue0F";

  const onToken = (token) => {
    axios({
      url: "/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((err) => {
        console.log("Payment error:", err);
        alert(
          "There was an issue with your payment, Please make sure you use the provided card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay"
      name="CROWN CLOTHINGS LTD"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
