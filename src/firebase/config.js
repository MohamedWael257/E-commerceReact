import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
export const firebaseConfig = {
    apiKey: "AIzaSyAFeK4wJHnPLZQIYeuNXI-mq-XFPJbDVwE",
    authDomain: "e-commerce-e0556.firebaseapp.com",
    projectId: "e-commerce-e0556",
    storageBucket: "e-commerce-e0556.appspot.com",
    messagingSenderId: "530194560612",
    appId: "1:530194560612:web:b13d789de1f4afb1e29171",
    measurementId: "G-8WR4K6PNKY"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;