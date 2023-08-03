import ClassContextComponent from "../components/ClassContextComponent";
import FunctionContextComponent from "../components/FunctionContextComponent";
import info from "../styles/Info.module.css";
import React, { useEffect, useState, useRef } from "react";
import util from "../styles/Util.module.css";

export const ThemeContext = React.createContext();

export default () => {
  const [darkTheme, setDarktheme] = useState(() => true);

  function toggleTheme() {
    setDarktheme((prevDarkTeme) => !prevDarkTeme);
  }

  return (
    <>
      <h1 className={util["header-1"]}>- useContext -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useContext</span> is a React hook that accepts a context object
        (the value returned from React.createContext) and returns the current{" "}
        <span> context value </span>
        for that context. The current context value is determined by the{" "}
        <span>nearest </span> matching Provider up the tree from where the hook
        is called, allowing you to easily access shared data without passing
        <span> props </span> down through every level of the{" "}
        <span> component </span> tree.
      </h2>
      <ThemeContext.Provider value={darkTheme}>
        <button className={util["button"]} onClick={toggleTheme}>
          Toggle Theme
        </button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
      ...
    </>
  );
};
