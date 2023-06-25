// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: "ben-and-jud.firebaseapp.com",
  projectId: "ben-and-jud",
  storageBucket: "ben-and-jud.appspot.com",
  messagingSenderId: "512135169636",
  appId: "1:512135169636:web:a4ae9b80a93bb401e2c171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firestore
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};