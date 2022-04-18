// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Gy92PY7RIOwVlrKdx91OLjrkZPHUuzc",
  authDomain: "my-own-gym-533fa.firebaseapp.com",
  projectId: "my-own-gym-533fa",
  storageBucket: "my-own-gym-533fa.appspot.com",
  messagingSenderId: "710958848197",
  appId: "1:710958848197:web:ec2aa28bfd3fd2ffbb78ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
