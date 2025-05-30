// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDwRQsNkDl_o82krrIJcuYae9mzZvHCNA",
  authDomain: "food-82cb1.firebaseapp.com",
  projectId: "food-82cb1",
  storageBucket: "food-82cb1.firebasestorage.app",
  messagingSenderId: "197461826275",
  appId: "1:197461826275:web:ce49bade52f2d5655703d6",
  measurementId: "G-W02N2WQMH6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
