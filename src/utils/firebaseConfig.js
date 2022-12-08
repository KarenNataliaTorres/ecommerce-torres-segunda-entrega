// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArOoHBxDCO6fO2_ydLUaiZq6HO1yRGfzM",
  authDomain: "proyecto-react-c93f2.firebaseapp.com",
  projectId: "proyecto-react-c93f2",
  storageBucket: "proyecto-react-c93f2.appspot.com",
  messagingSenderId: "605242985580",
  appId: "1:605242985580:web:78f61fcfd87ccef5781c49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);