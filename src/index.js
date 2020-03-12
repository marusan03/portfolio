import React from "react";
import ReactDOM from "react-dom";
import deepPurple from "@material-ui/core/colors/deepPurple";
import "./index.css";
import MenuTabs from "./MenuTabs";
import Logo from "./Logo";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <main style={{ color: deepPurple[900] }}>
    <Logo />
    <MenuTabs />
  </main>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
