import React from "react";
import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";
import "./SignInAndSignUp..scss";

function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
