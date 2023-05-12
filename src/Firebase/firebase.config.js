// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC54VwrnWG_9AhvJFQhdlfD-bEYL6nTTOg",
  authDomain: "car-doctor-39d82.firebaseapp.com",
  projectId: "car-doctor-39d82",
  storageBucket: "car-doctor-39d82.appspot.com",
  messagingSenderId: "417804865808",
  appId: "1:417804865808:web:b390960ef4561be4415595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;