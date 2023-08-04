import info from "../styles/Info.module.css";
import React, { useEffect, useState, useRef } from "react";
import util from "../styles/Util.module.css";
import Button from "../components/Button";

// Export a context object
export const ThemeContext = React.createContext();

export default () => {
  const [number, setNumber] = useState(() => 0);
  const [darkTheme, setDarktheme] = useState(() => true);

  const theme = {
    backgroundColor: darkTheme ? "#282c34" : "#fff",
    color: darkTheme ? "#fff" : "#282c34",
    padding: "10px 20px",
    fontSize: "24px",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "2px solid #61DAFB",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "750px",
  };

  return (
    <>
      <h1 className={util["header-1"]}>- useCallback -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useCallback </span> ...
      </h2>
      <Button
        active={darkTheme}
        handleClick={() => setDarktheme((prevDarkTeme) => !prevDarkTeme)}
        text="Toggle Theme"
      />
      <div style={theme}> THEME </div>

      <h2 className={`${info["info"]} ${info["border-top"]}`}>....</h2>
    </>
  );
};
