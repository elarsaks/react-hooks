import info from "../styles/Info.module.css";
import React, { useReducer } from "react";
import util from "../styles/Util.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  return (
    <>
      <h1 className={util["header-1"]}>- useReducer -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useReducer </span> ...
      </h2>

      <button className={util["button"]} onClick={handleDecrement}>
        -
      </button>
      <span className={util["counter"]}>{state.count}</span>
      <button className={util["button"]} onClick={handleIncrement}>
        +
      </button>

      <h2 className={`${info["info"]} ${info["border-top"]}`}>....</h2>
    </>
  );
};
