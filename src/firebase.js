import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCBCEPFzTEJb3whcrSgy-HhVmSXYPkTdqU",
    authDomain: "educa-a135e.firebaseapp.com",
    projectId: "educa-a135e",
    storageBucket: "educa-a135e.appspot.com",
    messagingSenderId: "533823708894",
    appId: "1:533823708894:web:821d65085b7d757f5d2c4f",
    measurementId: "G-SM286BTS31"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, auth, firestore, db, storage, analytics }   