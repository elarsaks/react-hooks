import ClassContextComponent from "../components/ClassContextComponent";
import FunctionContextComponent from "../components/FunctionContextComponent";
import Button from "../components/Button";
import info from "../styles/Info.module.css";
import React, { useEffect, useState, useRef } from "react";
import util from "../styles/Util.module.css";

// Create a new context instance
export const ThemeContext = React.createContext();

export default () => {
  // State to handle theme switching
  const [darkTheme, setDarktheme] = useState(() => true);

  // Function to toggle the theme state
  function toggleTheme() {
    setDarktheme((prevDarkTeme) => !prevDarkTeme);
  }

  return (
    <>
      <h1 className={util["header-1"]}>- useContext -</h1>

      {/* ThemeContext provider that provides the value of 'darkTheme' to all children */}
      <ThemeContext.Provider value={darkTheme}>
        {/* Button that toggles the theme state when clicked */}
        <Button
          active={darkTheme}
          handleClick={toggleTheme}
          text="Toggle Theme"
        />

        {/* Component consuming the context value using the 'useContext' hook */}
        <FunctionContextComponent />

        {/* Class component consuming the context value using the 'contextType' property */}
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
};
