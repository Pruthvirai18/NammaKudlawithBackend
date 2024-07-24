import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simple authentication logic (for demo purposes, replace with real auth logic)
    if (user && user.email === email && user.password === password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const signup = (email, password, name) => {
    setUser({ email, password, name });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
