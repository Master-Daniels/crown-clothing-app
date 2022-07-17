import React from "react";
import { HomePage } from "./Components/Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import SignInAndSignUp from "./Components/Pages/SignIn-SignUp/SignInAndSignUp";
import { Route, Routes, Navigate } from "react-router-dom";
import Shop from "./Components/Pages/Shop/Shop";
import Checkout from "./Components/Checkout/Checkout";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/userSelectors";
import { checkUserSession } from "./redux/user/userActions";

import { GlobalStyle } from "./globalStyles";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route
          path="signin"
          element={currentUser ? <Navigate to="/" /> : <SignInAndSignUp />}
        />
      </Routes>
    </div>
  );
};

export default App;
