// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Nc8QUILRzM_YkYUs_qCaHkyTJHyFLfw",
  authDomain: "aniblog-f53f8.firebaseapp.com",
  projectId: "aniblog-f53f8",
  storageBucket: "aniblog-f53f8.appspot.com",
  messagingSenderId: "765032940943",
  appId: "1:765032940943:web:71bb6dc9463e0aeddaf7fa",
  measurementId: "G-KZFS9TWE2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentification and ger a reference to the server 
export const auth = getAuth(app);