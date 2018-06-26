import React from "react";
import ReactDOM from "react-dom";
import AppProviders from "../providers";
import Example from "./Example";
import "./styles.css";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Example />
      </div>
    </AppProviders>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
