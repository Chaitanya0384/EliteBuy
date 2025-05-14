// src/Context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component wraps the app to provide the AuthContext
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // On component mount, check if there's a token stored in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // If token exists, set the user (you can extend this to decode token and get more info)
      setUser({ token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
