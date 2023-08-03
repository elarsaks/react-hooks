import React, { useState } from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";

export default () => {
  const spanStyle = {
    margin: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    borderRadius: "5px",
    border: "2px solid #61DAFB",
    padding: "10px 20px",
  };

  // Pass state initial value as a function to useState,
  // so the function is only called on the initial render.
  const [count, setCount] = useState(() => 0);

  // Pass a function to the setter of useState,
  // so the function is only called on the initial render.
  const handleIncrement = () => {
    setCount((previousCount) => previousCount + 1);
  };

  // Pass a function to the setter of useState,
  // so the function is only called on the initial render.
  const handleDecrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  return (
    <>
      <h1 className={util["header-1"]}>- useState -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useState</span> is a crucial React hook for managing state in
        <span> functional components</span>, enabling dynamic and interactive
        user interfaces through simple initialization and updates.
      </h2>

      <button className={util["button"]} onClick={handleDecrement}>
        -
      </button>
      <span style={spanStyle}>{count}</span>
      <button className={util["button"]} onClick={handleIncrement}>
        +
      </button>
    </>
  );
};
