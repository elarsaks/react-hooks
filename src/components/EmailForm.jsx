import React, { useState } from "react";
import util from "../styles/Util.module.css";

export default () => {
  const [email, setEmail] = useState("");
  const [hover, setHover] = useState(false);

  const emailInputStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "block",
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
    color: hover ? "#fbda61" : "#FFFFFF",
  };

  const labelStyle = {
    cursor: "pointer",
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div
        style={emailInputStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
          className={util["input"]}
        />
      </div>
    </>
  );
};
