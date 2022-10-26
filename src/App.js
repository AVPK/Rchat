import React from 'react';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwWeip8IsvO4li9SO0-_PNaAtK-iKfsgY",
  authDomain: "rchat-5449c.firebaseapp.com",
  projectId: "rchat-5449c",
  storageBucket: "rchat-5449c.appspot.com",
  messagingSenderId: "933115878558",
  appId: "1:933115878558:web:93177ed16e735a2eee2f8f",
  measurementId: "G-QPTV5DZ8DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>RChat</h1>
      </header>
    </div>
  );
}

export default App;
