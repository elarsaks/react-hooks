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
      <div className={header["header-content"]}>
        <div className={header["logo-title"]}>
          <img src={logo} className={app["App-logo"]} alt="logo" />
          <h1 className={header["header-title"]}>React Hooks</h1>
        </div>

        <select
          className={header["header-selector"]}
          onChange={handleRouteChange}
          value={selectedOption}
        >
          <option value="/useCallback">useCallback</option>
          <option value="/useContext">useContext</option>
          <option value="/useCustom">useCustom</option>
          <option value="/useEffect">useEffect</option>
          <option value="/useId">useId</option>
          <option value="/useLayout">useLayout</option>
          <option value="/useMemo">useMemo</option>
          <option value="/useReducer">useReducer</option>
          <option value="/useRef">useRef</option>
          <option value="/useState">useState</option>
        </select>
      </div>
    </div>
  );
}
