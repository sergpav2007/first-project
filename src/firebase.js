// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI57hwBtOLfbsEZA0QOkdF0TVsgFF5UuI",
  authDomain: "posts-828d1.firebaseapp.com",
  databaseURL: "https://posts-828d1-default-rtdb.firebaseio.com",
  projectId: "posts-828d1",
  storageBucket: "posts-828d1.appspot.com",
  messagingSenderId: "358361434376",
  appId: "1:358361434376:web:a4f8a57aa430b32d1104bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
export const db = getDatabase(app);