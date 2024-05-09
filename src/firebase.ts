import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCaxdz4p436WrIEyTzsXRWecQSiPHlJ3sA",
  authDomain: "unitedtreasury-bf323.firebaseapp.com",
  projectId: "unitedtreasury-bf323",
  storageBucket: "unitedtreasury-bf323.appspot.com",
  messagingSenderId: "931883762486",
  appId: "1:931883762486:web:a597717355c9a2cf1b2997",
  databaseURL: "https://unitedtreasury-bf323-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
 const database = getDatabase(app);
 export {database}