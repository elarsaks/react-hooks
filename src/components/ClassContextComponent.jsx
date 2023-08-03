import React, { Component } from "react";
import { ThemeContext } from "../pages/UseContext";

export default class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#282c34" : "#fff",
      color: dark ? "#fff" : "#282c34",
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
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
