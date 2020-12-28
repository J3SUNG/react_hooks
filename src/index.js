import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello React Hooks</h1>
      <h2>item is {item}</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>cerement</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
