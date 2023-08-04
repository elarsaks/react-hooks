import ClassContextComponent from "../components/ClassContextComponent";
import FunctionContextComponent from "../components/FunctionContextComponent";
import info from "../styles/Info.module.css";
import React, { useEffect, useState, useRef } from "react";
import util from "../styles/Util.module.css";

// Export a context object
export const ThemeContext = React.createContext();

export default () => {
  return (
    <>
      <h1 className={util["header-1"]}>- useCallback -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useCallback </span> ...
      </h2>
      ...
      <h2 className={`${info["info"]} ${info["border-top"]}`}>....</h2>
    </>
  );
};
