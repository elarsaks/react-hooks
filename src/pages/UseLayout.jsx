// Importing the necessary dependencies
import React from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";

export default () => {
  return (
    <>
      <h1 className={util["header-1"]}>- useLayout -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useLayout</span> ...
      </h2>
      ... Content ...
      <h2 className={`${info["info"]} ${info["border-top"]}`}>...</h2>
    </>
  );
};
