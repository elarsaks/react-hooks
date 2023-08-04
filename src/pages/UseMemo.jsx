import React, { useState, useMemo } from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";
import Button from "../components/Button";

export default () => {
  // Function that simulates a slow operation (for demonstration purposes)
  function slowFunction(num) {
    console.log("Calling Slow Function");
    for (let i = 0; i <= 1000000000; i++) {} // Loops to simulate delay
    return num * 2; // Returns doubled number
  }

  // State to manage the input number
  const [number, setNumber] = useState(0);

  // State to manage the theme
  const [dark, setDark] = useState(false);

  // useMemo used here to cache the result of slowFunction call,
  // as long as the 'number' dependency does not change.
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // useMemo used here to cache the styles object,
  // as long as the 'dark' dependency does not change.
  const themeStyles = useMemo(
    () => ({
      backgroundColor: dark ? "#282c34" : "#fff",
      color: dark ? "#fff" : "#282c34",
      padding: "10px 20px",
      fontSize: "24px",
      fontWeight: "bold",
      borderRadius: "5px",
      border: "2px solid #61DAFB",
      marginTop: "20px",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "800px",
    }),
    [dark]
  );

  // Event handler to toggle 'dark' state on button click
  const handleClick = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
    <>
      <h1 className={util["header-1"]}>- useMemo -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useMemo</span> is a React hook that memorizes the result of a
        function and returns the cached result when the function is called with
        the same inputs, optimizing performance by avoiding unnecessary
        re-computations.
      </h2>
      <input
        type="number"
        value={number}
        className={util["input"]}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <Button active={dark} handleClick={handleClick} text="Change Theme" />
      <div style={themeStyles}>Double the input: {doubleNumber}</div>

      <h2 className={`${info["info"]} ${info["border-top"]}`}>
        When updating the theme, the background colors changes quickly because
        the number value is taken from <span> memory</span>. However, when
        changing the number, the component takes a bit of time to re-render.
      </h2>
    </>
  );
};
