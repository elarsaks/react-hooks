import ClassContextComponent from "../components/ClassContextComponent";
import FunctionContextComponent from "../components/FunctionContextComponent";
import Button from "../components/Button";
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
        <Button
          active={darkTheme}
          handleClick={toggleTheme}
          text="Toggle Theme"
        />
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>

      <h2 className={`${info["info"]} ${info["border-top"]}`}>
        When the <span>Toggle Theme</span> button is clicked, the theme state is
        updated and passed via <span>context</span> to both functional and
        class-based theme components, which use the <span>context</span> value
        to render.
        <br></br> <br></br>
        Functional components use the <span>useContext hook </span>
        to consume <span>context</span>, while class components use the
        <span> static contextType</span> property to consume{" "}
        <span>context</span>.
      </h2>
    </>
  );
};
