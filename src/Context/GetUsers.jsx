import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { collection, onSnapshot, getDocs } from 'firebase/firestore';
import { db } from '../firebase';


const UserContext = createContext()

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserContextProvider = ({ children }) => {
    const [Users, setUsers] = useState([])
    const [isdatafetched, setIsDataFetched] = useState(false)
    useEffect(() => {
        const fetchTests = async () => {
            let list = []
            try {
                const snapshot = await getDocs((collection(db, 'Users')));
                snapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                    setUsers([...list])
                    setIsDataFetched(true)
                })
            } catch (error) {
                console.error(error)
            }
        }

        if (!isdatafetched) {
            fetchTests();
        }
        const unsubscribe = onSnapshot(collection(db, 'Users'), (querySnapshot) => {
            const updatedCoupons = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(updatedCoupons);
        });
        return () => unsubscribe();
    }, [isdatafetched])


    const updateData = (userId, updatedData) => {
        setUsers((prevUsers) => {
            return prevUsers.map(user => {
                if (user.id === userId) {
                    return { ...user, ...updatedData };
                }
                return user;
            });
        });
        
    };


    return (
        <UserContext.Provider value={{Users,updateData}}>
            {children}
        </UserContext.Provider>
    )
}
