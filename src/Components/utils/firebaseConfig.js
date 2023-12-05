

 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATMQYu4E1IHkl_i7MLomV9hCB5HTKI2qc",
  authDomain: "eventzone-2e2ce.firebaseapp.com",
  projectId: "eventzone-2e2ce",
  storageBucket: "eventzone-2e2ce.appspot.com",
  messagingSenderId: "308674032295",
  appId: "1:308674032295:web:7ac089220f079e55e8e182",
  measurementId: "G-T97JMBZTF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth
}