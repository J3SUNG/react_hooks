import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [number, setNumber] = useState(0);
  const [Anumber, setANumber] = useState(0);
  const sayHello = () => console.log("Hello");
  useEffect(() => {
    sayHello();
  }, [number]);

  return (
    <div className="App">
      <div>Hello</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(Anumber + 1)}>{Anumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
