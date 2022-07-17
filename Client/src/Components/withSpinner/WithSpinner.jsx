import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./withspinner.styles";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLaoding, ...rest }) => {
    return isLaoding ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...rest} />
    );
  };
  return Spinner;
};

export default WithSpinner;
