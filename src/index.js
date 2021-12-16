import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";

ReactDOM.render(
  <React.StrictMode>
    {/* <>123</> */}
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
