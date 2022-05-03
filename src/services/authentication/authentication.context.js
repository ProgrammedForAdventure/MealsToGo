import React, { useState, useEffect, createContext } from 'react';
import { loginRequest, registerRequest } from './authentication.service';
import { getAuth } from 'firebase/auth';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onAuthStateChanged = (usr) => {
    if (usr) {
      setUser(usr);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // Returning the subscriber will unsubscribe it upon unmounting
    return getAuth().onAuthStateChanged(onAuthStateChanged);
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setIsLoading(false);
        setUser(u);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match.');
      setIsLoading(false);
      return;
    }

    registerRequest(email, password)
      .then((u) => {
        setIsLoading(false);
        setUser(u);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    getAuth()
      .signOut()
      .then((result) => {
        console.log('Successfully signed out');
        setUser(null);
      })
      .catch((e) => {
        console.log(`Failed to sign out: ${e.message}`);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
