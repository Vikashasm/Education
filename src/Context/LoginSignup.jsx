import { createContext, useState, useEffect, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const UseAuthcontext = () => {
    return useContext(AuthContext)
}
export function UserAuthContextProvider({ children }) {

    async function CreateUser(email, password) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    }

    async function LoginUserWithEmail(email, password) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;

    }

    function logoutUser() {
        return signOut(auth)
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         localStorage.setItem('user', JSON.stringify(currentUser))
    //     });
    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])
    return <AuthContext.Provider value={{ CreateUser, logoutUser, LoginUserWithEmail }}>
        {children}
    </AuthContext.Provider>
}


