import app from "./styles/App.module.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import PageNotFound from "./pages/PageNotFound";
import UseCallback from "./pages/UseCallback";
import UseContext from "./pages/UseContext";
import UseEffect from "./pages/UseEffect";
import UseId from "./pages/UseId";
import UseMemo from "./pages/UseMemo";
import UseReducer from "./pages/UseReducer";
import UseRef from "./pages/UseRef";
import UseState from "./pages/UseState";

export default function App() {
  // Determine the correct base URL based on the environment (local or GitHub Pages)
  const baseUrl = process.env.NODE_ENV === "production" ? "/react-hooks" : "";

  return (
    <BrowserRouter basename={baseUrl}>
      <div className={app["App"]}>
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

            {/* UseId Route */}
            <Route path="useId" element={<UseId />} />

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
