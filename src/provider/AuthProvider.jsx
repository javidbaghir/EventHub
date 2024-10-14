import { Navigate } from "react-router-dom";
import { useContextGlobal } from "../context/GlobalContext";

function AuthProvider({ children }) {
  const { storage } = useContextGlobal();

  if (!storage.token) return <Navigate to={"/login"} />;

  return children;
}

export default AuthProvider;
