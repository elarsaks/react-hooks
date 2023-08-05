// Importing the necessary dependencies
import React, { useState } from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";
import Button from "../components/Button";

// Functional component
export default () => {
  return (
    <>
      <h1 className={util["header-1"]}>- useState -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useMyCustomHook</span> is a custom hook that encapsulates logic
        for
        <span> functional components</span>, enhancing UI interactivity with
        ease and precision.
      </h2>
      ...
      <h2 className={`${info["info"]} ${info["border-top"]}`}>
        <span>useCustom</span> ...
      </h2>
    </>
  );
};
