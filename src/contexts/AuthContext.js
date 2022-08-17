import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase-config';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const register = async (email, password) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem('access-token', data.user.accessToken);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('access-token', data.user.accessToken);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = () => {
    console.log('signed out');
    localStorage.removeItem('access-token');
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => setCurrentUser(user),
      setLoading(false)
    );

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
