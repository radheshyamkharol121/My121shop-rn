/**
 * Flash Sale Services
 */
import { firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

/**
 * Active flash sale fetch करता है
 */
export const fetchActiveFlashSale = async () => {
  const docRef = doc(firestore, "flashSales", "activeSale");
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};