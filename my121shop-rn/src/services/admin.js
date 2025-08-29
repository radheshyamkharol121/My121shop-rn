/**
 * Admin Bulk Upload Page
 * CSV/Excel से products upload करने के लिए
 */
import React, { useState } from "react";
import { uploadProductsCSV } from "../../services/admin";

const BulkUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("CSV file select करें");
    await uploadProductsCSV(file);
    alert("Products uploaded successfully");
  };

  return (
    <div>
      <h1>Bulk Upload Products</h1>
      <input type="file" accept=".csv" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default BulkUpload;

/**
 * CSV से products upload करता है
 * @param {File} file
 */
export const uploadProductsCSV = async (file) => {
  const text = await file.text();
  const lines = text.split("\n");
  const headers = lines[0].split(",");
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    const product = {};
    headers.forEach((h, idx) => product[h.trim()] = values[idx].trim());
    await addProduct(product); // addProduct function पहले से होना चाहिए
  }
};

/**
 * Product Firestore में add करता है
 */
export const addProduct = async (product) => {
  const productsRef = collection(firestore, "products");
  await addDoc(productsRef, product);
};

/**
 * Stock कम होने वाले products fetch करता है
 */
export const fetchLowStockProducts = async () => {
  const productsSnap = await getDocs(collection(firestore, "products"));
  const lowStock = [];
  productsSnap.forEach(doc => {
    const data = doc.data();
    if (data.stock <= 5) { // Threshold 5
      lowStock.push({ id: doc.id, ...data });
    }
  });
  return lowStock;
};
