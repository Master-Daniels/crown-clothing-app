import React from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { connect } from "react-redux";
import { createUserWithEmailAndPasswordStart } from "../../redux/user/userActions";

import "./signup.scss";

const SignUp = ({ createUser }) => {
  const [userCreds, setUserCreds] = React.useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword, displayName } = userCreds;

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords does not match");
      return;
    }
    createUser(email, password, displayName);
    setUserCreds({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCreds({
      ...userCreds,
      [name]: value,
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form method="post" onSubmit={handleRegister} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  createUser: (email, password, displayName) =>
    dispatch(
      createUserWithEmailAndPasswordStart({ email, password, displayName })
    ),
});
export default connect(null, mapDispatchToProps)(SignUp);
