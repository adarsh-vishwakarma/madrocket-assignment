// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMxdAmoK8hCSrVZRTsQw74DzF6EyoRK1Q",
  authDomain: "assignment-2b6cf.firebaseapp.com",
  projectId: "assignment-2b6cf",
  storageBucket: "assignment-2b6cf.firebasestorage.app",
  messagingSenderId: "712553283094",
  appId: "1:712553283094:web:5fa263271f47b90b263f37",
  measurementId: "G-SH3WN908LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)
export {auth, db, app} 

