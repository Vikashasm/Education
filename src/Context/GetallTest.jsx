import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { collection, onSnapshot,getDocs } from 'firebase/firestore';
import { db } from '../firebase';
const TestContext = createContext()

export const useTestcontext = () => {
    return useContext(TestContext);
}


export const TestContextProvider = ({ children }) => {
    const [Tests, setTests] = useState([])
    const [isdatafetched, setIsDataFetched] = useState(false)
    const [selectedTitleId, setSelectedTitleId] = useState(() => {
        const storedId = localStorage.getItem('selectedTitleId');
        return storedId ? storedId : (Tests.length > 0 ? Tests[0].id : null);
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
        localStorage.setItem('selectedTitleId', selectedTitleId);
    }, [selectedTitleId]);

    const memodata = useMemo(() => Tests, [Tests])

    const selectedTitleTests = useMemo(() => {
        if (!selectedTitleId && Tests.length > 0) {
            setSelectedTitleId(Tests[0].id);
            return [Tests[0]];
        }
        return Tests.filter(test => test.id === selectedTitleId);
    }, [Tests, selectedTitleId]);

    useEffect(() => {
        localStorage.setItem('selectedTitleId', String(selectedTitleId));
    }, [selectedTitleId]);


    return (
        <TestContext.Provider value={{ Tests: memodata , selectedTitleId, setSelectedTitleId, selectedTitleTests }}>
            {children}
        </TestContext.Provider>
    )
}
