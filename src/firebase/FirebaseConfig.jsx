// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4qj8wp907i8Oy-HSpX5HCC7nrcrrFPoE",
  authDomain: "myecom-f36b3.firebaseapp.com",
  projectId: "myecom-f36b3",
  storageBucket: "myecom-f36b3.appspot.com",
  messagingSenderId: "127300794478",
  appId: "1:127300794478:web:178225af29b1d8ec224e7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
