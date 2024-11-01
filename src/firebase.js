

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

console.log("Firebase API Key:", process.env.REACT_APP_FIREBASE_API_KEY);
console.log("Firebase Project ID:", process.env.REACT_APP_FIREBASE_PROJECT_ID);


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };