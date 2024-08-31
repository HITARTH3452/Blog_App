// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-8abae.firebaseapp.com",
  projectId: "blog-app-8abae",
  storageBucket: "blog-app-8abae.appspot.com",
  messagingSenderId: "930341624803",
  appId: "1:930341624803:web:9eaeabee03f37168d2ded6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);