import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, confirmPasswordReset} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDMqWuZ-P2n-b1cRHTFQ_8WChr5RmhqfHU",
  authDomain: "anthstone.firebaseapp.com",
  databaseURL: "https://anthstone-default-rtdb.firebaseio.com",
  projectId: "anthstone",
  storageBucket: "anthstone.appspot.com",
  messagingSenderId: "897319986652",
  appId: "1:897319986652:web:4b81cbac193df59a009b19",
  measurementId: "G-05Y1LP139Y",  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
 const database = getDatabase(app);
 export {database}

 export const passwordReset = async (email: string) => {
  return await sendPasswordResetEmail(auth, email)
}

export const confirmThePasswordReset = async (
  oobCode:string, newPassword:string
) => {
  if(!oobCode && !newPassword) return;
  
  return await confirmPasswordReset(auth, oobCode, newPassword)
}