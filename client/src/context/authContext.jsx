import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {  // quick-restore
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);
  const login = (user, token) => {
    setUser(user); localStorage.setItem("user", JSON.stringify(user)); localStorage.setItem("token", token);
  };
  const logout = () => {
    setUser(null); localStorage.removeItem("user"); localStorage.removeItem("token");
  };
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
