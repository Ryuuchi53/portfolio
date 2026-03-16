// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGjQ5nPAqkJrBX0_YsCHDvP-gr_6wE40c",
  authDomain: "portfolio-6b391.firebaseapp.com",
  databaseURL: "https://portfolio-6b391-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-6b391",
  storageBucket: "portfolio-6b391.firebasestorage.app",
  messagingSenderId: "679864343432",
  appId: "1:679864343432:web:f50fbb60cab4989fef783d",
  measurementId: "G-7YJPS5GFMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);