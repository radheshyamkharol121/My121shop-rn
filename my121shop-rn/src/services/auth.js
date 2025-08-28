// Authentication से जुड़े सारे Firebase functions
// यह file AuthContext में import होगी

import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

/**
 * नया user signup करना
 * @param {string} email - user का email
 * @param {string} password - user का password
 * @param {object} extraData - नाम, phone आदि
 */
export const signup = async (email, password, extraData = {}) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Firestore में user details store करना
  await setDoc(doc(db, "users", user.uid), {
    email,
    ...extraData,
    createdAt: new Date(),
  });

  return user;
};

/**
 * User login
 * @param {string} email 
 * @param {string} password 
 */
export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

/**
 * Logout function
 */
export const logout = async () => {
  await signOut(auth);
};

/**
 * Reset password link भेजना
 * @param {string} email 
 */
export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};

/**
 * Firestore से user data fetch करना
 * @param {string} uid 
 */
export const getUserData = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data();
  else return null;
};