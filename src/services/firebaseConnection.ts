import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2dSNU186fj_KMEI4keGEQ9N0_2KYmeps",
  authDomain: "reactlinks-4c07c.firebaseapp.com",
  projectId: "reactlinks-4c07c",
  storageBucket: "reactlinks-4c07c.firebasestorage.app",
  messagingSenderId: "255971137458",
  appId: "1:255971137458:web:d5477916af174caa6b76ab",
  measurementId: "G-99EZJW7Q95"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db};

