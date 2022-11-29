import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCorrentUser] = useState();

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCorrentUser(user);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ signUp: signUp, }}>
            {children}
        </AuthContext.Provider>
    );
}