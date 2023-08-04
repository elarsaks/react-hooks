import React from "react";
import util from "../styles/Util.module.css";
import todoStyle from "../styles/Todo.module.css";

const ACTIONS = {
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

export default function Todo({ todo, dispatch, name }) {
  return (
    <div key={todo.id} className={todoStyle["todo"]}>
      <h2>
        <span className={todo.complete ? todoStyle["complete"] : ""}>
          {todo.name}
        </span>
      </h2>

      <div className={todoStyle["todo-actions"]}>
        <button
          className={util["button"]}
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </button>

        <button
          className={util["button"]}
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}
