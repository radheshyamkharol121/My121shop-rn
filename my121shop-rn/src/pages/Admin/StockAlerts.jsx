/**
 * Stock Alerts Page
 */
import React, { useEffect, useState } from "react";
import { fetchLowStockProducts } from "../../services/admin";

const StockAlerts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLowStockProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Stock Alerts</h1>
      {products.length === 0 ? <p>All products in stock</p> :
        <ul>
          {products.map(p => <li key={p.id}>{p.name} - {p.stock} left</li>)}
        </ul>}
    </div>
  );
};

export default StockAlerts;