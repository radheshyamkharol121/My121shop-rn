// पूरे ऐप में Auth state manage करने वाला Context
// सभी pages/components में user info और login/logout functions provide करेगा

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import * as AuthService from "../services/auth";

// Context create
const AuthContext = createContext();

/**
 * AuthProvider component
 * इसे App.jsx में wrap करना होगा
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);     // Logged-in user
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Firebase auth state observer
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userData = await AuthService.getUserData(currentUser.uid);
        setUser({ uid: currentUser.uid, ...userData });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Auth functions
  const value = {
    user,
    login: AuthService.login,
    signup: AuthService.signup,
    logout: AuthService.logout,
    resetPassword: AuthService.resetPassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

// Hook for using context easily
export const useAuth = () => useContext(AuthContext);