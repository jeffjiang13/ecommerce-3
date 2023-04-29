import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDkwqz3KAXLg8ymuyj68L34H8CIXC0GKeI",
  authDomain: "ecommerce-3-61e7d.firebaseapp.com",
  projectId: "ecommerce-3-61e7d",
  storageBucket: "ecommerce-3-61e7d.appspot.com",
  messagingSenderId: "779395084082",
  appId: "1:779395084082:web:778138230e06bdf534f12b",
  measurementId: "G-1E4T6MBDDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
