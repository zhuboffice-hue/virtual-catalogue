import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2796-kT3fBC_WW4H0XRvRqlnj6uBUwEA",
    authDomain: "virtual-catalogue.firebaseapp.com",
    projectId: "virtual-catalogue",
    storageBucket: "virtual-catalogue.firebasestorage.app",
    messagingSenderId: "916656896191",
    appId: "1:916656896191:web:9a558aab1027f7a787ee0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
