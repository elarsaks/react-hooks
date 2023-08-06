// Importing the necessary dependencies
import React, { useState, useLayoutEffect } from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";
import Button from "../components/Button";

export default () => {
  const [count, setCount] = useState(() => 0);
  const handleIncrement = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const handleDecrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  // The useLayoutEffect hook is similar to the useEffect hook.
  // The difference is that it fires synchronously after all DOM mutations.
  // This hook is useful when you need to read or write the DOM before the browser paints.
  // It's recommended to use useEffect instead of useLayoutEffect.
  // This is because useLayoutEffect can block visual updates, making your app feel sluggish.
  // However, if you need to make DOM measurements or trigger a synchronous re-render,
  // useLayoutEffect is the right choice.
  useLayoutEffect(() => {
    if (count === 0) {
      document.title = "React Hooks";
    } else {
      document.title = `Count: ${count}`;
    }
  }, [count]);

  return (
    <>
      <h1 className={util["header-1"]}>- useLayoutEffect -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useLayoutEffect</span> is a built-in hook in React. It's a
        JavaScript function that allows you to perform side effects
        synchronously after DOM mutations, ensuring that the UI is updated
        before the browser paints.
      </h2>

      <Button text="-" handleClick={handleDecrement} />
      <span className={util["counter"]}>{count}</span>
      <Button text="+" handleClick={handleIncrement} />

      <h2 className={`${info["info"]} ${info["border-top"]}`}>
        In this demonstration, we've leveraged the <span>useLayoutEffect</span>{" "}
        hook to update the document title. The title is updated synchronously
        after the DOM is updated, ensuring that the UI is updated before the
        browser paints.
      </h2>
    </>
  );
};
