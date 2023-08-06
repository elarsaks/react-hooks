import { useLocation } from "react-router-dom";

export default function useDocumentTitle() {
  const location = useLocation();
  const currentHook = location.pathname.split("/").pop() || "useState";
  document.title = `React Hooks: ${currentHook}`;
}
