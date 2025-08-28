// Products और Inventory के लिए Firebase operations

import { db } from "../firebase";
import { collection, getDocs, doc, getDoc, query, where, orderBy, limit } from "firebase/firestore";

/**
 * सभी products fetch करना
 * @returns {Array} products
 */
export const getAllProducts = async () => {
  const colRef = collection(db, "products");
  const snapshot = await getDocs(colRef);
  const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return products;
};

/**
 * Single product fetch by id
 * @param {string} productId
 */
export const getProductById = async (productId) => {
  const docRef = doc(db, "products", productId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
  else return null;
};

/**
 * Products filter by category, price, or search keyword
 * @param {object} filters { category, minPrice, maxPrice, keyword }
 */
export const filterProducts = async (filters) => {
  let q = collection(db, "products");

  // Dynamic queries for Firestore
  if (filters.category) q = query(q, where("category", "==", filters.category));
  if (filters.minPrice != null) q = query(q, where("price", ">=", filters.minPrice));
  if (filters.maxPrice != null) q = query(q, where("price", "<=", filters.maxPrice));
  if (filters.keyword) {
    // Simple keyword filter client-side
    const all = await getDocs(q);
    const products = all.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products.filter(p => p.name.toLowerCase().includes(filters.keyword.toLowerCase()));
  }

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

/**
 * Check if product stock is available
 * @param {string} productId
 * @param {number} qty
 * @returns {boolean}
 */
export const checkStock = async (productId, qty) => {
  const product = await getProductById(productId);
  return product && product.stock >= qty;
};