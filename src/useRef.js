import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const inputRef = useRef();
  setTimeout(() => inputRef.current.focus(), 2000);
  return (
    <div className="App">
      <div>Hello</div>
      <input ref={inputRef} placeholder="la" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
