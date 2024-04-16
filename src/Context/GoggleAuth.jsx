import { useContext, createContext, useState } from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth"; 
import { useEffect } from "react";


const AuthContext = createContext();


export const UseAuthcontext = () => {
    return useContext(AuthContext)
}
export function UserAuthContextProvider({ children }) {
    const [user , setuser ] = useState(null)

    async function GoggleSignIn() {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Google sign-in error:", error);
        }
    }
    async function logoutUser() {
        localStorage.clear()
        await signOut(auth)
        setuser(null)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("currentUser is ",currentUser)
                const userData = { userid: currentUser.uid, useremail: currentUser.email };
                localStorage.setItem('user', JSON.stringify(userData));
                setuser(true)
            } else {
                localStorage.removeItem('user');
                setuser(null)
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return <AuthContext.Provider value={{ GoggleSignIn , logoutUser, user }}>
        {children}
    </AuthContext.Provider>
}

