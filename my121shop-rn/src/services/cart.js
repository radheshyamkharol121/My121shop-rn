// Cart के लिए Firebase operations
// यह file CartContext में import होगी

import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

/**
 * User का cart fetch करना
 * @param {string} uid - user uid
 * @returns {Array} cart items
 */
export const getCart = async (uid) => {
  const docRef = doc(db, "carts", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data().items || [];
  else return [];
};

/**
 * Cart में नया item add करना
 * @param {string} uid - user uid
 * @param {object} item - item details { productId, qty, variant }
 */
export const addToCart = async (uid, item) => {
  const docRef = doc(db, "carts", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await updateDoc(docRef, { items: arrayUnion(item) });
  } else {
    await setDoc(docRef, { items: [item] });
  }
};

/**
 * Cart से item remove करना
 * @param {string} uid 
 * @param {object} item 
 */
export const removeFromCart = async (uid, item) => {
  const docRef = doc(db, "carts", uid);
  await updateDoc(docRef, { items: arrayRemove(item) });
};

/**
 * Cart item quantity update करना
 * @param {string} uid 
 * @param {object} item - existing item
 * @param {number} newQty - new quantity
 */
export const updateCartItemQty = async (uid, item, newQty) => {
  const cart = await getCart(uid);
  const updatedCart = cart.map(ci => ci.productId === item.productId ? { ...ci, qty: newQty } : ci);
  await setDoc(doc(db, "carts", uid), { items: updatedCart });
};