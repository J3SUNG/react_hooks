import React, { useState } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput";

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <div>useInput</div>
        <input placeholder="Name" {...name} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
