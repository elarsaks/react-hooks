import info from "../styles/Info.module.css";
import React, { useReducer } from "react";
import util from "../styles/Util.module.css";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => dispatch({ type: ACTIONS.INCREMENT });
  const handleDecrement = () => dispatch({ type: ACTIONS.DECREMENT });

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
