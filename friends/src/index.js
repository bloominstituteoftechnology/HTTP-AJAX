import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
