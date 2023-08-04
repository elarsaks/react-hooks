import info from "../styles/Info.module.css";
import React, { useReducer, useState } from "react";
import util from "../styles/Util.module.css";

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <>
      <h1 className={util["header-1"]}>- useReducer -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>useReducer </span> ...
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          className={util["input"]}
          onChange={(e) => setName(e.target.value)}
        />
        <button className={util["button"]} type="submit">
          Add Todo
        </button>
      </form>

      {todos.map((todo) => (
        <div key={todo.id} className={todo.complete ? util["complete"] : ""}>
          <h1>
            <span>{todo.name}</span>
          </h1>
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
            disabled={!name}
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
            }
          >
            Delete
          </button>
        </div>
      ))}

      <h2 className={`${info["info"]} ${info["border-top"]}`}>....</h2>
    </>
  );
}
