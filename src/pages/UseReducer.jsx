// Import necessary dependencies
import info from "../styles/Info.module.css";
import React, { useReducer, useState } from "react";
import util from "../styles/Util.module.css";
import Todo from "../components/Todo";
import Button from "../components/Button";

// Define actions for the reducer
const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

// Reducer function to handle state changes based on dispatched actions
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO: // Add a new todo
      return [...state, newTodo(action.payload.name)]; // Return a new state array with the added todo
    case ACTIONS.TOGGLE_TODO: // Toggle a todo's complete status
      return state.map((todo) => {
        // Return a new state array with the toggled todo
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO: // Delete a todo
      return state.filter((todo) => todo.id !== action.payload.id); // Return a new state array without the deleted todo
    default: // Unknown action type
      return state; // Return the current state without making changes
  }
}

// Helper function to create a new todo
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

// Define functional component
export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []); // Initialize todos state with an empty array and useReducer hook
  const [name, setName] = useState(""); // Initialize name state with an empty string

  // Function to handle form submit event
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission event
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } }); // Dispatch an action to add a todo
    setName(""); // Reset the name state to an empty string
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
        <Button
          text="Add Todo"
          handleClick={handleSubmit}
          disabled={!name}
          active={name ? true : false}
        />
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
