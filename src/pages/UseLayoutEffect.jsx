// Importing the necessary dependencies
import React from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";

export default () => {
  return (
    <>
      <h1 className={util["header-1"]}>- useLayoutEffect -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useLayoutEffect</span> is a built-in hook in React. It's a
        JavaScript function that allows you to perform side effects
        synchronously after DOM mutations, ensuring that the UI is updated
        before the browser paints.
      </h2>
      ...
      <h2 className={`${info["info"]} ${info["border-top"]}`}></h2>
    </>
  );
};
