import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

ul,
ol {
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  font-family: inherit;
}

label {
  cursor: pointer;
}

a {
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 5px 10px;
  text-decoration: none;
  border: 1px solid #503a55;
  border-radius: 10px;
}
`;
