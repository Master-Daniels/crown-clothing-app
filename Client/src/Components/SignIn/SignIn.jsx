import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";

import { connect } from "react-redux";

import "./SignIn.scss";

const SignIn = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const { emailSignInStart } = props;
    emailSignInStart(email, password);
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign In With your Email and Password</span>

      <form autoComplete="off" onSubmit={handleSubmit} method="post">
        <FormInput
          type="email"
          id="email"
          name="email"
          value={email}
          handleChange={(event) => setEmail(event.target.value)}
          label="EMAIL"
          required
          autoComplete="off"
        />
        <FormInput
          type="password"
          id="password"
          name="password"
          value={password}
          handleChange={(event) => setPassword(event.target.value)}
          label="PASSWORD"
          required
          autoComplete="off"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={props.googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToprops)(SignIn);
