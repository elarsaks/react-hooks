import React, { useState, useMemo } from "react";

export default () => {
  const infoStyle = {
    color: "#FBDA61",
    margin: "20px",
  };

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
    margin: "20px",
  };

  return (
    <>
      <h2 style={infoStyle}>
        When updating the theme, the background colors change quickly because
        the number value is taken from memory. However, when changing the
        number, the component takes a bit of time to re-render.
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
        class="button-style"
        onClick={(e) => setDark((prevDark) => !prevDark)}
      >
        Change Theme
      </button>
      {/* Display the doubled number with the dynamically applied theme */}
      <div style={themeStyles}>Double the input: {doubleNumber}</div>
    </>
  );
};
