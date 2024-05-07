import  { useEffect, useState } from "react";
import { AuthContext } from "./AucthContext";
import { auth } from "../firebase";
import firebase from "firebase/compat/app";

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe(); 
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
