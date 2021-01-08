import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { isElementOfType } from "react-dom/test-utils";
import NewAxios from "./component/NewAxios";
import NewBeforeLeave from "./component/NewBeforeLeave";
import NewClick from "./component/NewClick";
import NewConfirm from "./component/NewConfirm";
import NewFadeIn from "./component/NewFadeIn";
import NewFullscreen from "./component/NewFullscreen";
import NewInput from "./component/NewInput";
import NewNetwork from "./component/NewNetwork";
import NewNotification from "./component/NewNotification";
import NewPreventLeave from "./component/NewPreventLeave";
import NewScroll from "./component/NewScroll";
import NewTabs from "./component/NewTabs";
import useAxios from "./function/UseAxios";

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
      <NewNetwork /> 
      <NewScroll /> 
      <NewFullscreen /> 
      <NewNotification /> */}
      <NewAxios />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
