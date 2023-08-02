import React, { useState, useMemo } from "react";

export default () => {
  const buttonStyle = {
    margin: "20px",
    border: "2px solid #61DAFB",
    color: "white",
    backgroundColor: "#282c34",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
  };

  const inputStyle = {
    margin: "20px",
    border: "2px solid #61DAFB",
    color: "#282c34",
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "18px",
  };

  // Function that simulates a slow operation (for demonstration purposes)
  function slowFunction(num) {
    console.log("Calling Slow Function");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  // State to manage the input number
  const [number, setNumber] = useState(0);

  // State to manage the theme
  const [dark, setDark] = useState(false);

  // Function that simulates a slow operation
  const doubleNumber = slowFunction(number);

  // Memoized styles to change the theme dynamically
  const themeStyles = useMemo(
    () => ({
      backgroundColor: dark ? "#282c34" : "#fff",
      color: dark ? "#fff" : "#282c34",
      padding: "10px 20px",
      fontSize: "24px",
      fontWeight: "bold",
      borderRadius: "5px",
      border: "2px solid #61DAFB",
      margin: "20px",
    }),
    [dark]
  );

  return (
    <>
      {/* Input field to change the number */}
      <input
        type="number"
        value={number}
        style={inputStyle}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      {/* Button to change the theme */}
      <button
        style={buttonStyle}
        onClick={(e) => setDark((prevDark) => !prevDark)}
      >
        Change Theme
      </button>
      {/* Display the doubled number with the dynamically applied theme */}
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};
