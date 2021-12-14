import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
