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