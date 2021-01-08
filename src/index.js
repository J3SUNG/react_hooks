import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput";
import useTabs from "./useTabs";
import useTitle from "./useTitle";

const content = [
  {
    tab: "Section 1",
    content: "This is the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "This is the content of the Section 2",
  },
];

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <div>useInput</div>
        <input placeholder="Name" {...name} />
      </div>
      <div>
        <div>useTabs</div>
        <div>
          {content.map((section, index) => (
            <button key={index} onClick={() => changeItem(index)}>
              {section.tab}
            </button>
          ))}
        </div>
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
