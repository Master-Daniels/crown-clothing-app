import styled, { css } from "styled-components";

const customButtonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const Cart = css`
  font-size: 12px;
  max-width: 160px;
  margin-inline: auto;
`;
const isGoogleSignIn = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: transparent;
    color: #357ae8;
    border: 1px solid #357ae8;
  }
`;
const inverted = css`
  background-color: white;
  color: black;
  border: 1px solid white;

  &:hover {
    color: white;
    border: none;
  }
`;
const appliedStyles = (props) => {
  if (props.isGoogleSignIn) {
    return isGoogleSignIn;
  } else if (props.cart) {
    return Cart;
  }
  return props.inverted ? inverted : customButtonStyles;
};
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 5px 0 5px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Saira Condensed", sans-serif;
  cursor: pointer;
  transition: background-color 0.45s ease-in-out;
  display: flex;
  place-items: center;
  place-content: center;

  ${appliedStyles}
`;
