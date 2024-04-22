import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { collection, onSnapshot, getDocs ,doc,getDoc} from 'firebase/firestore';
import { UseAuthcontext } from './GoggleAuth';
import { db } from '../firebase';
import { useUserContext } from './GetUsers'; 
import Loader from '../Loader'; 
const TestContext = createContext()

export const useTestcontext = () => {
    return useContext(TestContext); 
}

export const TestContextProvider = ({ children }) => {
    const { user } = UseAuthcontext();
    const [Tests, setTests] = useState([])
    const [isdatafetched, setIsDataFetched] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [selectedLevel, setselectedLevel] = useState(() => {
        const storedLevel = localStorage.getItem('selectedLevel');
        return storedLevel ? parseInt(storedLevel) : 0;
    });

    const [activeComponent, SetactiveComponent] = useState(null)

    useEffect(() => {
        const fetchTests = async () => {
            let list = []
            try {
                const snapshot = await getDocs((collection(db, 'Test')));
                snapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                    setTests([...list])
                    setIsDataFetched(true)
                })
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false); // Set loading to false after fetching data
            }
        }

        if (!isdatafetched) {
            fetchTests();
        }
        const unsubscribe = onSnapshot(collection(db, 'Test'), (querySnapshot) => {
            const updatedCoupons = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTests(updatedCoupons);
        });
        return () => unsubscribe();
    }, [isdatafetched])

    useEffect(() => {
        localStorage.setItem('selectedLevel', selectedLevel);
    }, [selectedLevel]);

    const memodata = useMemo(() => Tests, [Tests])

    const selectedTitleTests = useMemo(() => {
        if (selectedLevel === 0 && Tests.length > 0) {
            return [];
        }
        return Tests.filter(test => test.Level === parseInt(selectedLevel));
    }, [Tests, selectedLevel]);

    // Fetch user-specific data from Firestore
    useEffect(() => {
        const fetchUserData = async () => {
            let userid = ''
            const userString = localStorage.getItem('user');
            if (userString) {
                // Parse the user object string to JSON
                const user = JSON.parse(userString);
                // Get the userid from the user object
                userid = user.userid;
            }
            if (user !== null && userid !== null) {
                try {
                    const userRef = doc(db, 'Users', userid);
                    const userSnapshot = await getDoc(userRef);
                    if (userSnapshot.exists()) {
                        const userData = userSnapshot.data();
                        // Update state with user-specific data
                        setselectedLevel(userData.Level);
                        // Add other user-specific data to state as needed
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchUserData();
    }, [user]);



    //  return context 
    return (
        <TestContext.Provider value={{ Tests: memodata, selectedLevel, setselectedLevel, selectedTitleTests, SetactiveComponent, activeComponent }}>
            {isLoading ? <Loader></Loader> : children}
        </TestContext.Provider>
    )
}


