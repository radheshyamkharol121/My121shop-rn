import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cartItems, removeFromCart, getCartTotal } = useCart()

  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      right: '20px',
      background: 'white',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      minWidth: '250px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h3>Shopping Cart ({cartItems.length})</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '10px 0',
              padding: '5px',
              borderBottom: '1px solid #eee'
            }}>
              <div>
                <div>{item.name}</div>
                <small>₹{item.price} x {item.quantity}</small>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
            Total: ₹{getCartTotal()}
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
