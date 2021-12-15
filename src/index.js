import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";
import CookieConsent from "react-cookie-consent";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainContainer />
    <CookieConsent
      debug={true}
      location="bottom"
      style={{
        background: "#333",
        textAlign: "left",
        paddingBottom: "1rem",
        fontSize: "16px",
        fontFamily: "Gideon Roman",
      }}
      buttonStyle={{
        color: "#333",
        background: "#fff",
        fontSize: "18px",
        fontFamily: "BaroqueScript",
        marginRight: "1rem",
      }}
      buttonText="OK, rozumiem"
      expires={365}
    >
      "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
      Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
      indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
      dotyczących cookies oznacza, że będą one zamieszczane w Państwa urządzeniu
      końcowym. Możecie Państwo dokonać w każdym czasie zmiany ustawień
      dotyczących cookies."
    </CookieConsent>
  </React.StrictMode>,
  document.getElementById("root")
);
