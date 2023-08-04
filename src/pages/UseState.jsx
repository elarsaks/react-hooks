// Importing the necessary dependencies
import React, { useState } from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";
import Button from "../components/Button";

// Functional component
export default () => {
  // Here, we declare a new state variable, count, that we initialize to 0.
  // useState is a Hook (we’ll talk about what this means in a moment) that allows you to add React state to function components.
  // The only argument to the useState() Hook is the initial state.
  // In this case, we're passing 0 as initial state because our count starts from zero.
  // The count variable is assigned the current state and setCount is a function that allows us to update it.
  const [count, setCount] = useState(() => 0);

  // Function to handle increment action.
  // The previous state is passed as an argument to the function setCount.
  // This is the recommended way of updating the state when the new state is derived from the previous state.
  const handleIncrement = () => {
    setCount((previousCount) => previousCount + 1);
  };

  // Function to handle decrement action.
  // Here, we're passing a function to setCount. The function we pass receives the previous value and returns the new value.
  const handleDecrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  // The component returns a UI which is rendered on the browser.
  // The returned JSX contains two Buttons and a counter.
  // It also includes an explanation of the useState hook.
  return (
    <>
      <h1 className={util["header-1"]}>- useState -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useState</span> is a crucial React hook for managing state in
        <span> functional components</span>, enabling dynamic and interactive
        user interfaces through simple initialization and updates.
      </h2>

      <Button text="-" handleClick={handleDecrement} />
      <span className={util["counter"]}>{count}</span>
      <Button text="+" handleClick={handleIncrement} />

      <h2 className={`${info["info"]} ${info["border-top"]}`}>
        In this demonstration, we've leveraged the <span>useState</span> hook to
        represent our state as a numerical count. This count can be dynamically
        increased or decreased, offering a clear illustration of state
        management in a <span>React functional component</span>.
      </h2>
    </>
  );
};
