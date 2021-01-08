import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import NewBeforeLeave from "./component/NewBeforeLeave";
import NewClick from "./component/NewClick";
import NewConfirm from "./component/NewConfirm";
import NewFadeIn from "./component/NewFadeIn";
import NewInput from "./component/NewInput";
import NewNetwork from "./component/NewNetwork";
import NewPreventLeave from "./component/NewPreventLeave";
import NewScroll from "./component/NewScroll";
import NewTabs from "./component/NewTabs";

const App = () => {
  return (
    <div className="App">
      {/* <NewInput />
      <NewTabs />
      <NewClick />
      <NewConfirm />
      <NewPreventLeave />
      <NewBeforeLeave />
      <NewFadeIn />
      <NewNetwork /> */}
      <NewScroll />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
