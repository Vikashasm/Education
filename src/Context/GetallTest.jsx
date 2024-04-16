import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { collection, onSnapshot, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
const TestContext = createContext()

export const useTestcontext = () => {
    return useContext(TestContext);
}


export const TestContextProvider = ({ children }) => {
    const [Tests, setTests] = useState([])
    const [isdatafetched, setIsDataFetched] = useState(false)
    const [selectedLevel, setselectedLevel] = useState(() => {
        const storedLevel = localStorage.getItem('selectedLevel');
        return storedLevel ? storedLevel : (Tests.length > 0 ? Tests[0].Level : null);
    });
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
        if (!selectedLevel && Tests.length > 0) {
            setselectedLevel(Tests[0].Level);
            return [Tests[0]];
        }
        return Tests.filter(test => test.Level === parseInt(selectedLevel));
    }, [Tests, selectedLevel]);

    useEffect(() => {
        localStorage.setItem('selectedLevel', selectedLevel);
    }, [selectedLevel]);

    //  reutrn context 
    return (
        <TestContext.Provider value={{ Tests: memodata, selectedLevel, setselectedLevel, selectedTitleTests }}>
            {children}
        </TestContext.Provider>
    )

}
