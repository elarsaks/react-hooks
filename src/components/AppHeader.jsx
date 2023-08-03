import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../logo.svg";
import header from "../styles/AppHeader.module.css";
import app from "../styles/App.module.css";

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
    <div className={header["App-header"]}>
      <div className={header["logo-title"]}>
        <img src={logo} className={app["App-logo"]} alt="logo" />
        <h1 className={header["header-content"]}>React Hooks</h1>
      </div>

      <select
        className={header["header-selector"]}
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
