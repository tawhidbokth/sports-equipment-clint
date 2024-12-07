// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOQNIpLA_4h3J6QiFuNWzYfCXKq6VT-F0",
  authDomain: "sprots-enquipment.firebaseapp.com",
  projectId: "sprots-enquipment",
  storageBucket: "sprots-enquipment.firebasestorage.app",
  messagingSenderId: "879590461517",
  appId: "1:879590461517:web:c6ccd100092b108d790c04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth (app);