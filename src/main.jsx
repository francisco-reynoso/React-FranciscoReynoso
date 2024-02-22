import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAojtxFZm_H6Ut9v2OGR7F3v_GA7CGH5kM",
  authDomain: "juleriaque-2d32a.firebaseapp.com",
  projectId: "juleriaque-2d32a",
  storageBucket: "juleriaque-2d32a.appspot.com",
  messagingSenderId: "580963780583",
  appId: "1:580963780583:web:e9f632b79eec8a2ed51f42"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
