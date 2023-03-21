// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhdDHdNVjy8fnCSJyFO8s6vDnsp2lChrA",
  authDomain: "first-easy.firebaseapp.com",
  projectId: "first-easy",
  storageBucket: "first-easy.appspot.com",
  messagingSenderId: "1095691487013",
  appId: "1:1095691487013:web:c7e75a6e301816d67efccc",
  measurementId: "G-5LD9N6ZF51"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);