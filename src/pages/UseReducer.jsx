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
    case ACTIONS.ADD_TODO:  // Add a new todo
      return [...state, newTodo(action.payload.name)];  // Return a new state array with the added todo
    case ACTIONS.TOGGLE_TODO:  // Toggle a todo's complete status
      return state.map((todo) => {  // Return a new state array with the toggled todo
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:  // Delete a todo
      return state.filter((todo) => todo.id !== action.payload.id);  // Return a new state array without the deleted todo
    default:  // Unknown action type
      return state;  // Return the current state without making changes
  }
}

// Helper function to create a new todo
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

// Define functional component
export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);  // Initialize todos state with an empty array and useReducer hook
  const [name, setName] = useState("");  // Initialize name state with an empty string

  // Function to handle form submit event
  function handleSubmit(e) {
    e.preventDefault();  // Prevent the default form submission event
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });  // Dispatch an action to add a todo
    setName("");  // Reset the name state to an empty string
  }

  // Render the component
  return (
    // ...
    // Form for entering a new todo
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        className={util["input"]}
        onChange={(e) => setName(e.target.value)}  // Update the name state when the input changes
      />
      <Button
        text="Add Todo"
        handleClick={handleSubmit}
        disabled={!name}  // Disable the button when the name state is an empty string
        active={name ? true : false}  // Make the button active when the name state is not an empty string
      />
    </form>
    // ...
    // Map through the todos state array and render a Todo component for each todo
    {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} dispatch={dispatch} name={name} />
    ))}
    // ...
  );
}
