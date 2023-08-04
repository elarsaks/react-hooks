// Import necessary packages, styles, and components
import info from "../styles/Info.module.css";
import React, { useState, useCallback } from "react";
import util from "../styles/Util.module.css";
import Button from "../components/Button";
import List from "../components/List";

// Create a context for theme
export const ThemeContext = React.createContext();

// Default component function
export default () => {
  // Create state for number and darkTheme using useState hook
  const [number, setNumber] = useState(() => 0);
  const [darkTheme, setDarktheme] = useState(() => true);

  // Theme styles that change based on darkTheme state
  const theme = {
    backgroundColor: darkTheme ? "#282c34" : "#fff",
    color: darkTheme ? "#fff" : "#282c34",
    padding: "10px 20px",
    fontSize: "24px",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "2px solid #61DAFB",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "750px",
  };

  // useCallback hook for creating a memoized version of getItems function
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <>
      {/* Header and Explanation about useCallback */}
      <h1 className={util["header-1"]}>- useCallback -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useCallback</span> is a React hook that accepts a function and a
        dependencies array as inputs and returns a memoized version of the
        function. This hook is useful when passing callbacks to optimized child
        components that rely on reference equality to prevent unnecessary
        renders. When the dependencies of the <span>useCallback</span> hook
        remain the same across re-renders, the same function reference is
        returned by the hook. This approach helps in avoiding the re-creation of
        functions, thereby saving <span>component</span> re-renders and
        improving overall performance.
      </h2>

      {/* Input field to set the number state */}
      <input
        type="number"
        value={number}
        className={util["input"]}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      {/* Button to toggle the darkTheme state */}
      <Button
        active={darkTheme}
        handleClick={() => setDarktheme((prevDarkTeme) => !prevDarkTeme)}
        text="Toggle Theme"
      />

      {/* List component that gets items from getItems function */}
      <div style={theme}>
        <List getItems={getItems} />
      </div>

      {/* Other information (if needed) */}
      <h2 className={`${info["info"]} ${info["border-top"]}`}>....</h2>
    </>
  );
};
