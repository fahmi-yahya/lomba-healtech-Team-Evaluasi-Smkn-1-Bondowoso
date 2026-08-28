import { createContext, useContext } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();
export function AuthProvider({ children}) {

  function setToken(token) {
    localStorage.setItem("token", token);
  }
  function getToken() {
    localStorage.getItem("token");
  }
  function deleteToken() {
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ setToken, getToken, deleteToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function Auth() {
  return useContext(AuthContext);
}

export function AuthProtected({ children }) {
  let token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/"} replace />;
  }
  return children;
}
