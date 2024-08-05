// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzhX_wNbGkkIHI3tDKIdvSO1nMt5rtG7g",
  authDomain: "inventory-management-8732a.firebaseapp.com",
  projectId: "inventory-management-8732a",
  storageBucket: "inventory-management-8732a.appspot.com",
  messagingSenderId: "17772047886",
  appId: "1:17772047886:web:d5d4ebd852027725f8965f",
  measurementId: "G-V9GSEWG2TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };