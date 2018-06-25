import React from "react";
import ReactDOM from "react-dom";
import AppProviders from "../providers";
import "./styles.css";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
      </div>
    </AppProviders>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
