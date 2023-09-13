// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH5vDZY-udiUlo9d8YgqqjVJMGw21eWf4",
  authDomain: "beginnerpro-2782c.firebaseapp.com",
  projectId: "beginnerpro-2782c",
  storageBucket: "beginnerpro-2782c.appspot.com",
  messagingSenderId: "622210542602",
  appId: "1:622210542602:web:7ad902a86d7aa7617243f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth} ;