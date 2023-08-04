import React from "react";
import buttonStyle from "../styles/Button.module.css";

const Button = ({ handleClick, text, active, disabled }) => {
  let buttonClass = buttonStyle["button"];

  if (active) {
    buttonClass = buttonStyle["active-button"];
  }

  if (disabled) {
    buttonClass = buttonStyle["disabled-button"];
  }

  return (
    <button className={buttonClass} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
