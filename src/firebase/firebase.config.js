// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFh06cofW4dbR8eyusp0T89EbMbVKrwS8",
  authDomain: "collage-nest.firebaseapp.com",
  projectId: "collage-nest",
  storageBucket: "collage-nest.appspot.com",
  messagingSenderId: "184027581983",
  appId: "1:184027581983:web:515f1e269b1aacc3c10f2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;