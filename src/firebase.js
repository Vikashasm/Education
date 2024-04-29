import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDx9FulrMGu2CFXKsQ-VtcRqBIEewFpTaI",
    authDomain: "english-74388.firebaseapp.com",
    projectId: "english-74388",
    storageBucket: "english-74388.appspot.com",
    messagingSenderId: "201983085608",
    appId: "1:201983085608:web:e5c81a950f18040434791d"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, auth, firestore, db, storage, analytics }   