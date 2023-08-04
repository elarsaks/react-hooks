import info from "../styles/Info.module.css";
import React, { useReducer, useState } from "react";
import util from "../styles/Util.module.css";
import Todo from "../components/Todo";

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
        <span>useReducer</span> is a powerful React hook for managing{" "}
        <b>state</b> in
        <span> functional components</span>, providing a more precise control
        over <span> complex state </span> transitions than <span>useState</span>
        , particularly when the new <b>state</b> depends on the old one.
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          className={util["input"]}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className={name ? util["active-button"] : util["disabled-button"]}
          type="submit"
          disabled={!name}
        >
          Add Todo
        </button>
      </form>

      <br />

      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} name={name} />
      ))}

      <h2 className={`${info["info"]} ${info["border-top"]}`}>
        In this implementation, our <span> state </span> is represented as an
        <span> array </span>, where each element is a <b>"todo"</b>{" "}
        <span>object </span>.<br></br> <br></br>
        These <b>"todo"</b> <span>objects </span> are structured with three
        distinct <span>properties</span>: an identifier <span>(id)</span>, a
        task description
        <span> (name)</span>, and a completion <span>(status)</span> indicator
        <b> (complete)</b> which is a <span>boolean</span>.
      </h2>
    </>
  );
}
