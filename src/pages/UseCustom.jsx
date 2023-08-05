// Importing the necessary dependencies
import React from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";
import useLocalStorage from "../hooks/useLocalStorage";

export default () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <>
      <h1 className={util["header-1"]}>- useCustom -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>customHook</span> is a user-created hook in React. It's a
        JavaScript function that starts with the name <span>use</span> and can
        call other hooks or execute any custom JavaScript operations.
      </h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={util["input"]}
      />

      <h2 className={`${info["info"]} ${info["border-top"]}`}>
        In this case we are using a custom hook called{" "}
        <span>useLocalStorage</span> to store the value of the input field in
        the local storage of the browser. This value is then retrieved from the
        local storage and displayed in the input field.
        <br /> <br />
        Anything typed in the <span>input </span> field will be stored in the
        <span> local storage </span> of the browser. If you refresh the page,
        the value will persist. <b>Use dev tools </b> to see the value in{" "}
        <span> local storage</span>.
      </h2>
    </>
  );
};
