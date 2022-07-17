import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after,
:root {
  box-sizing: border-box;
  font-family: "Saira Condensed", sans-serif;
}
body {
  font-family: 'Open sans Condensed';
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
  font-weight: 500;
}
::-webkit-scrollbar {
  width: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: none;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: slategray;
}


`;
