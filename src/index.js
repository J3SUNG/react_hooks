import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import NewBeforeLeave from "./component/NewBeforeLeave";
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
      <NewBeforeLeave />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
