import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import UseCallback from "./pages/UseCallback";
import UseContext from "./pages/UseContext";
import UseEffect from "./pages/UseEffect";
import UseMemo from "./pages/UseMemo";
import UseReducer from "./pages/UseReducer";
import UseRef from "./pages/UseRef";
import PageNotFound from "./pages/PageNotFound";
import UseState from "./pages/UseState";
import logo from "./logo.svg";

function Header() {
  const navigate = useNavigate();

  const handleRouteChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React Hooks</h1>

      <select onChange={handleRouteChange}>
        <option value="/">Home</option>
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

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> {/* Now, Header is inside BrowserRouter */}
        <Routes>
          <Route path="/">
            {/* UseState Route */}
            <Route index element={<UseState />} />
            <Route path="useState" element={<UseState />} />

            {/* UseCallback Route */}
            <Route path="useCallback" element={<UseCallback />} />

            {/* UseContext Route */}
            <Route path="useContext" element={<UseContext />} />

            {/* UseEffect Route */}
            <Route path="useEffect" element={<UseEffect />} />

            {/* UseMemo Route */}
            <Route path="useMemo" element={<UseMemo />} />

            {/* UseReducer Route */}
            <Route path="useReducer" element={<UseReducer />} />

            {/* UseRef Route */}
            <Route path="useRef" element={<UseRef />} />

            {/* Page Not Found Route */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
