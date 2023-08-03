import React, { useState } from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";

export default () => {
  const [name, setName] = useState(() => "");

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

      <input
        type="text"
        value={name}
        className={util["input"]}
        onChange={(e) => setName(e.target.value)}
      />

      <h2 className={`${info["info"]} ${info["border-top"]}`}>
        My name is <span> {name ? name : "...."} </span>
      </h2>
    </>
  );
};
