import React, { createContext, useContext, useState, useEffect } from 'react'

const AdminContext = createContext()

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}

export const AdminProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data - बाद में Firebase से replace करेंगे
  const mockProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150",
      inStock: true,
      description: "High-quality wireless headphones"
    },
    {
      id: 2, 
      name: "Smart Watch",
      price: 3999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150",
      inStock: true,
      description: "Feature-rich smartwatch"
    }
  ]

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProducts(mockProducts)
      setLoading(false)
    }, 1000)
  }, [])

  const addProduct = async (productData) => {
    const newProduct = {
      id: Date.now(), // Temporary ID
      ...productData,
      createdAt: new Date()
    }
    setProducts(prev => [...prev, newProduct])
    return { success: true, id: newProduct.id }
  }

  const updateProduct = async (productId, productData) => {
    setProducts(prev => prev.map(product =>
      product.id === productId 
        ? { ...product, ...productData, updatedAt: new Date() }
        : product
    ))
    return { success: true }
  }

  const deleteProduct = async (productId) => {
    setProducts(prev => prev.filter(product => product.id !== productId))
    return { success: true }
  }

  const refreshData = () => {
    setLoading(true)
    setTimeout(() => {
      setProducts(mockProducts)
      setLoading(false)
    }, 500)
  }

  const value = {
    products,
    loading,
    addProduct,
    updateProduct, 
    deleteProduct,
    refreshData
  }

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )
}
