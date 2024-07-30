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

// import React, { createContext, useState, useContext } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   const login = async (username, password) => {
//     try {
//       const response = await axios.post('http://localhost:5004/login', { username, password });
//       if (response.status === 200) {
//         setIsAuthenticated(true);
//         setUser({ username });
//         return true;
//       }
//     } catch (error) {
//       console.error('Login error:', error.response.data.error);
//       return false;
//     }
//   };

//   const signup = async (username, password) => {
//     try {
//       const response = await axios.post('http://localhost:5004/signup', { username, password });
//       if (response.status === 201) {
//         return true;
//       }
//     } catch (error) {
//       console.error('Signup error:', error.response.data.error);
//       return false;
//     }
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout, signup }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
