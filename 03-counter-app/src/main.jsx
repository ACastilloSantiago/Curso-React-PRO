import React from "react";
import ReactDom from "react-dom/client";
import "./styles.css"; //! Estilos GLOBALES JEJEEEJEJE
// import { FirstApp } from "./FirstApp";
import CounterApp from "./CounterApp";
ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp title="Hola, soy Goku!" /> */}
    <CounterApp value={1} />
  </React.StrictMode>
);
