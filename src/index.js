import React from "react";
import ReactDOM from "react-dom";
import NewClick from "./component/NewClick";
import NewConfirm from "./component/NewConfirm";
import NewInput from "./component/NewInput";
import NewPreventLeave from "./component/NewPreventLeave";
import NewTabs from "./component/NewTabs";

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <NewInput />
      <NewTabs />
      <NewClick />
      <NewConfirm />
      <NewPreventLeave />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
