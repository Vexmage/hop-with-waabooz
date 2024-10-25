//import firebase from "firebase/app";
//import "firebase/firestore";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAkkZeUPA3KtDvBqHKou3mU2SNVF5uxz_k",
  authDomain: "ojibwe-word-of-the-day.firebaseapp.com",
  projectId: "ojibwe-word-of-the-day",
  storageBucket: "ojibwe-word-of-the-day.appspot.com",
  messagingSenderId: "930718505383",
  appId: "1:930718505383:web:85576ddbd2fe717a13be82",
  measurementId: "G-0966PLKN8J"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };