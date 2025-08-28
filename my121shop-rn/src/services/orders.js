/**
 * Orders के लिए सभी operations
 * create order, fetch orders
 */

import { firestore } from "../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

/**
 * नया order create करता है
 * @param {Object} orderData
 */
export const createOrder = async (orderData) => {
  const ordersCol = collection(firestore, "orders");
  const docRef = await addDoc(ordersCol, orderData);
  return docRef.id;
};

/**
 * User के orders fetch करता है
 * @param {string} userId
 */
export const fetchUserOrders = async (userId) => {
  const q = query(collection(firestore, "orders"), where("userId", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};