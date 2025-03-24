import firebase from "firebase/compat/app";
import { getAuth } from  "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB828Oghlbgs3sGXvbaPBAgleC6HkXimt0",
  authDomain: "amzon-backend-clone.firebaseapp.com",
  projectId: "amzon-backend-clone",
  storageBucket: "amzon-backend-clone.firebasestorage.app",
  messagingSenderId: "432106157709",
  appId: "1:432106157709:web:935c777d544f70df5094c4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()