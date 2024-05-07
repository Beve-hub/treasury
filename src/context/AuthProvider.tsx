import React, { createContext, useContext, useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import { ReactNode } from "react";
import { getAuth, signOut } from "firebase/auth";



interface AuthContextType {
    isLoggedIn: boolean;
    user: firebase.User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
  }

  const AuthContext = createContext<AuthContextType | undefined>(undefined);
   interface AuthProviderProps {
       children: ReactNode;
   }


   export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const auth = getAuth();
    const [user, setUser] = useState<firebase.User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (email: string, password: string) => {
        try {
          await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
          throw new Error('Failed to sign in');
        }
      };
    
      const logout = async () => {
        signOut(auth)
        .then(() => {
          setIsLoggedIn(true);
          console.log('log out')
        }) .catch((error) => {
          console.error('failed to sign out',error)})
      }

      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser); 
                setIsLoggedIn(true);
            } else {
                setUser(null);
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe(); 
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
};
