// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c4864.firebaseapp.com",
  projectId: "mern-estate-c4864",
  storageBucket: "mern-estate-c4864.appspot.com",
  messagingSenderId: "820153557599",
  appId: "1:820153557599:web:94f053e48a1127fea8f1ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);