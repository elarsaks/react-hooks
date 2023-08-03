import React, { useContext } from "react";
import { ThemeContext } from "../pages/UseContext";

export default () => {
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
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
    maxWidth: "800px",
  };

  return <div style={themeStyles}>Function Theme</div>;
};
