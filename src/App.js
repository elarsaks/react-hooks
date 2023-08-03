import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import UseCallback from "./pages/UseCallback";
import UseContext from "./pages/UseContext";
import UseEffect from "./pages/UseEffect";
import UseMemo from "./pages/UseMemo";
import UseReducer from "./pages/UseReducer";
import UseRef from "./pages/UseRef";
import PageNotFound from "./pages/PageNotFound";
import UseState from "./pages/UseState";
import AppHeader from "./components/AppHeader";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route>
            {/* Redirect from base route to useState */}
            <Route path="/" element={<Navigate to="/useState" />} />

            {/* UseState Route */}
            <Route path="useState" element={<UseState />} index />

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
