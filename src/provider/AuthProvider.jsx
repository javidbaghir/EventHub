import { Navigate } from "react-router-dom";

function AuthProvider({children}) {

    const token = localStorage.token;

    if (!token) return <Navigate to={'/login'} />

    return children;
}

export default AuthProvider;