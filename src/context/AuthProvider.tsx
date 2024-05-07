// AuthProvider.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

interface User {
    uid: string;
    // You can add other user properties here if needed
}

interface AuthContextType {
    isLoggedIn: boolean;
    user: User | null;
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
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const logout = async () => {
        try {
            await signOut(auth);
            setIsLoggedIn(false);
            setUser(null); 
            console.log('Logged out');
        } catch (error) {
            console.error('Failed to sign out', error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser({ uid: firebaseUser.uid });
                setIsLoggedIn(true);
            } else {
                setUser(null);
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
