import { createGlobalStyle } from "styled-components";
import NanumSquareEB from "../fonts/NanumSquareEB.woff";

export const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: 'NanumSquareEB';
	font-display: fallback;
	src: url(${NanumSquareEB}) format('woff')
}
*{
  margin:0;
  padding:0;
  font-family: 'NanumSquareEB' !important;
  letter-spacing: -2px;
  &:focus,&:hover,&:active{
  outline:none !important;
  }
  outline:none !important;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
button {
  border: 0;
}
body{
  background:#f7f7f7;
  &::-webkit-scrollbar {
    display: none;
  }
  .container {
    max-width: 1140px;
    margin: 0 auto;
    position: relative;
    @media (max-width: 1200px) {
        width: calc(100% - 50px);
    }
  }
}
`;
