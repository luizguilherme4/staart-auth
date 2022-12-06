import React, { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCorrentUser] = useState();

    function logOut() {
        return signOut(auth);
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function updateEmailAddress(newEmail) {
        return updateEmail(currentUser, newEmail);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCorrentUser(user);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{
            signUp: signUp,
            signIn: signIn,
            logOut: logOut,
            currentUser: currentUser,
            updateEmailAddress: updateEmailAddress,
        }}>
            {children}
        </AuthContext.Provider>
    );
}