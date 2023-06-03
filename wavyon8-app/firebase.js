// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPoPVQBlOfrA9Wzkl-ylrlZQwdgfVXkfg",
  authDomain: "wavyon8.firebaseapp.com",
  projectId: "wavyon8",
  storageBucket: "wavyon8.appspot.com",
  messagingSenderId: "82442962206",
  appId: "1:82442962206:web:f4042b3eb677ee450fb50f",
  measurementId: "G-YB6VT12QZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);