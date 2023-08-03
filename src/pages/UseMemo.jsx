import React, { useState, useMemo } from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";

export default () => {
  const inputStyle = {
    margin: "20px",
    border: "2px solid #61DAFB",
    color: "#282c34",
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
  };

  // Function that simulates a slow operation (for demonstration purposes)
  function slowFunction(num) {
    console.log("Calling Slow Function");
    for (let i = 0; i <= 2000000000; i++) {}
    return num * 2;
  }

  // State to manage the input number
  const [number, setNumber] = useState(0);

  // State to manage the theme
  const [dark, setDark] = useState(false);

  // At first value is returned from the slow function and then it is stored in memory.
  // When the number changes, the slow function is called again and the value is updated in memory.
  // This way, the slow function is not called on every render.
  // Value is returned from memory when the theme changes.
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // Using this line instead of the one above will cause the slow function to be called on every render
  //  const doubleNumber = slowFunction(number);

  // Memoized styles to change the theme dynamically
  const themeStyles = {
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
      {/* Input field to change the number */}
      <input
        type="number"
        value={number}
        style={inputStyle}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      {/* Button to change the theme */}
      <button
        className={util["button"]}
        onClick={(e) => setDark((prevDark) => !prevDark)}
      >
        Change Theme
      </button>
      {/* Display the doubled number with the dynamically applied theme */}
      <div style={themeStyles}>Double the input: {doubleNumber}</div>

      <h2 className={`${info["info"]} ${info["border-top"]}`}>
        When updating the theme, the background colors change quickly because
        the number value is taken from <span> memory</span>. However, when
        changing the number, the component takes a bit of time to re-render.
      </h2>
    </>
  );
};
