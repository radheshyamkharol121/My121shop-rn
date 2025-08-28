// Firebase को configure और initialize करने वाली file
// यह पूरे ऐप में reuse होगी (Auth, Firestore, Storage)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",               // API key डालें
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Firebase App initialize
const app = initializeApp(firebaseConfig);

// Firebase services initialize
export const auth = getAuth(app);         // Authentication के लिए
export const db = getFirestore(app);      // Firestore database के लिए
export const storage = getStorage(app);   // Storage के लिए

export default app;