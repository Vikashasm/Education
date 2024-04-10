import { createContext, useState, useEffect, useContext } from "react";
import { signInWithEmailAndPassword , createUserWithEmailAndPassword, signOut } from "firebase/auth";


const AuthContext = createContext();

export  const UseAuthcontext = () => {
    return useContext(AuthContext)
}
    export function UserAuthContextProvider({ children }) {
        const [user, setUser] = useState('')

        function loginUser(email, password) {
            return signInWithEmailAndPassword(auth, email, password)
        }
        function logoutUser() {
            return signOut(auth)
        }

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                localStorage.setItem('user', JSON.stringify(currentUser))
            });
            return () => {
                unsubscribe()
            }
        }, [])
        return <AuthContext.Provider value={{ loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    }


