// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaxdz4p436WrIEyTzsXRWecQSiPHlJ3sA",
  authDomain: "unitedtreasury-bf323.firebaseapp.com",
  projectId: "unitedtreasury-bf323",
  storageBucket: "unitedtreasury-bf323.appspot.com",
  messagingSenderId: "931883762486",
  appId: "1:931883762486:web:a597717355c9a2cf1b2997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);