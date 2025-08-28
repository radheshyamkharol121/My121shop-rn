// पूरे ऐप में Cart state manage करेगा
// user cart data और operations provide करेगा

import React, { createContext, useContext, useEffect, useState } from "react";
import * as CartService from "../services/cart";
import { useAuth } from "./AuthContext";

// Cart context
const CartContext = createContext();

/**
 * CartProvider component
 * इसे App.jsx में wrap करना होगा
 */
export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        const items = await CartService.getCart(user.uid);
        setCart(items);
      } else {
        setCart([]);
      }
      setLoading(false);
    };

    fetchCart();
  }, [user]);

  // Cart functions
  const addItem = async (item) => {
    if (!user) return;
    await CartService.addToCart(user.uid, item);
    setCart(prev => [...prev, item]);
  };

  const removeItem = async (item) => {
    if (!user) return;
    await CartService.removeFromCart(user.uid, item);
    setCart(prev => prev.filter(ci => ci.productId !== item.productId));
  };

  const updateItemQty = async (item, newQty) => {
    if (!user) return;
    await CartService.updateCartItemQty(user.uid, item, newQty);
    setCart(prev => prev.map(ci => ci.productId === item.productId ? { ...ci, qty: newQty } : ci));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateItemQty, loading }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook for easy usage
export const useCart = () => useContext(CartContext);