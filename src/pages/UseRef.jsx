// Import necessary dependencies
import React, { useEffect, useState, useRef } from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";

// Define functional component
export default () => {
  // Declare state variable name, initialized with an empty string
  const [name, setName] = useState(() => "");

  // Create refs for storing the render count and previous name value
  const renderCount = useRef(0);
  const prevName = useRef("");

  // useEffect hook runs after every render
  useEffect(() => {
    // Store the current name value as the previous name
    prevName.current = name;

    // Increase the render count
    renderCount.current = renderCount.current + 1;
  });

  // Render the component
  return (
    <>
      <h1 className={util["header-1"]}>- useRef -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useRef</span> is a React hook that creates and returns a{" "}
        <span> mutable </span>
        reference object. The returned object persists for the full{" "}
        <span>lifetime of the component</span>, allowing you to keep any mutable
        value around similar to instance fields in classes.
      </h2>

      {/* Input field for user to enter their name. On change, the setName function is called to update the name state. */}
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        className={util["input"]}
        onChange={(e) => setName(e.target.value)}
      />

      <h2 className={`${info["info"]} `}>
        My name is <span> {name ? name : "_"} </span> <br></br>
        It used to be <span>
          {" "}
          {prevName.current ? prevName.current : "_"}{" "}
        </span>{" "}
        <br></br>
        Component was rendered <span> {renderCount.current} </span> times.
      </h2>

      <h2 className={`${info["info"]} ${info["border-top"]}`}>
        Everytime user <span> inputs </span> a character, the{" "}
        <span>component </span> is re-rendered. <br></br>
        <span>useRef</span> is good for persisting values, without causing{" "}
        <span> re-renders</span>.
      </h2>
    </>
  );
};
