import React from "react"
import Header from "./components/Header"
import Cart from "./components/Cart"
import { CartProvider, useCart } from "./context/CartContext"
import "./App.css"

function AppContent() {
  const { addToCart } = useCart()
  
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      description: "High-quality wireless headphones with noise cancellation"
    },
    {
      id: 2, 
      name: "Smart Watch",
      price: 4999,
      description: "Feature-rich smartwatch with health monitoring"
    },
    {
      id: 3,
      name: "Phone Case", 
      price: 499,
      description: "Durable and stylish phone case"
    },
    {
      id: 4,
      name: "Power Bank",
      price: 1499,
      description: "10000mAh fast charging power bank"
    }
  ]

  const handleBuyNow = (product) => {
    addToCart(product)
    alert(`Added ${product.name} to cart!`)
  }

  return (
    <div className="app">
      <Header />
      <Cart />
      
      <div className="header">
        <h1>Welcome to My121Shop</h1>
        <p>Your one-stop shop for all electronics</p>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">₹{product.price}</div>
            <button 
              className="button"
              onClick={() => handleBuyNow(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div style={{marginTop: "40px", textAlign: "center"}}>
        <h2>About Our Store</h2>
        <p>We offer the best electronics at competitive prices with fast delivery across India.</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App
