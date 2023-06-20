// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVntOkeX1cwxPvGFBV2qR5c9Zsgg3KMXE",
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

export {db};