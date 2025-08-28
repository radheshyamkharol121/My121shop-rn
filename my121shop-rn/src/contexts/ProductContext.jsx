// पूरे ऐप में product state manage करेगा
// filtering, search और stock check provide करेगा

import React, { createContext, useContext, useEffect, useState } from "react";
import * as ProductService from "../services/products";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initial fetch
  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await ProductService.getAllProducts();
      setProducts(allProducts);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // Filter products
  const filter = async (filters) => {
    setLoading(true);
    const filtered = await ProductService.filterProducts(filters);
    setProducts(filtered);
    setLoading(false);
  };

  // Check stock for a product
  const isInStock = async (productId, qty) => {
    return await ProductService.checkStock(productId, qty);
  };

  return (
    <ProductContext.Provider value={{ products, loading, filter, isInStock }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook for easy usage
export const useProducts = () => useContext(ProductContext);