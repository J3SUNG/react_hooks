import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  const ref = useRef();
  console.log(ref);
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("click", onClick);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return ref;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
