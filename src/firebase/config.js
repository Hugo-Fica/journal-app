// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD64HCgHDzxTYXk7JMlBTpC3EQUqWTPIMw",
    authDomain: "react-journalapp-149fa.firebaseapp.com",
    projectId: "react-journalapp-149fa",
    storageBucket: "react-journalapp-149fa.appspot.com",
    messagingSenderId: "292535769172",
    appId: "1:292535769172:web:acacbc537b4cb4327135c1"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
