import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import React from "react";

export default function AppHeader() {
  const navigate = useNavigate();

  const handleRouteChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React Hooks</h1>

      <select className="header-selector" onChange={handleRouteChange}>
        <option value="/useState">UseState</option>
        <option value="/useCallback">UseCallback</option>
        <option value="/useContext">UseContext</option>
        <option value="/useEffect">UseEffect</option>
        <option value="/useMemo">UseMemo</option>
        <option value="/useReducer">UseReducer</option>
        <option value="/useRef">UseRef</option>
      </select>
    </div>
  );
}
