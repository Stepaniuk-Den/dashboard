import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  // <BrowserRouter basename="/dashboard">
  <HashRouter>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </HashRouter>
  // </BrowserRouter>
);
