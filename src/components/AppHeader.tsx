import { useNavigate, useLocation } from "react-router-dom";
import logo from "../logo.svg";
import React, { useEffect, useState } from "react";

export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(location.pathname);

  const handleRouteChange = (event) => {
    navigate(event.target.value);
  };

  // Update the selected option whenever the location changes
  useEffect(() => {
    setSelectedOption(location.pathname);
  }, [location]);

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React Hooks</h1>

      <select
        className="header-selector"
        onChange={handleRouteChange}
        value={selectedOption}
      >
        <option value="/useCallback">* UseCallback </option>
        <option value="/useContext">* UseContext</option>
        <option value="/useCustom">* UseCustom</option>
        <option value="/useEffect">UseEffect</option>
        <option value="/useMemo">UseMemo</option>
        <option value="/useReducer">* UseReducer</option>
        <option value="/useRef">* UseRef</option>
        <option value="/useState">UseState</option>
        <option value="/useLayout">* UseLayout</option>
      </select>
    </div>
  );
}
