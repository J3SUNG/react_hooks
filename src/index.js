import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [item, setItem] = useState(1);
  return (
    <div className="App">
      <h1>Hello React Hooks</h1>
      <h2>item is {item}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
