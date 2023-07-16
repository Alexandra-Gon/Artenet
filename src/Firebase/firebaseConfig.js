import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD1ZZacCl6RJwHwr5cWNkpYTXGXLvzD2U",
  authDomain: "artenet-c6f1b.firebaseapp.com",
  projectId: "artenet-c6f1b",
  storageBucket: "artenet-c6f1b.appspot.com",
  messagingSenderId: "158588231971",
  appId: "1:158588231971:web:ef33c1f6b4ea07bf276c96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 