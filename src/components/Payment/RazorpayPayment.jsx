import React from 'react'
import { useRazorpay } from 'react-razorpay'
import { useCart } from '../../context/CartContext'

const RazorpayPayment = ({ orderData, onSuccess, onError }) => {
  const [Razorpay] = useRazorpay()
  const { clearCart } = useCart()

  const handlePayment = async () => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: orderData.amount * 100, // Paise में
      currency: "INR",
      name: "My121Shop",
      description: `Order #${orderData.orderId}`,
      image: "https://my121shop-56021.web.app/logo.png",
      order_id: orderData.razorpayOrderId,
      handler: function (response) {
        onSuccess(response)
        clearCart()
      },
      prefill: {
        name: orderData.customerName,
        email: orderData.customerEmail,
        contact: orderData.customerPhone
      },
      notes: {
        address: orderData.shippingAddress
      },
      theme: {
        color: "#3B82F6"
      }
    }

    const rzp = new Razorpay(options)
    rzp.open()
  }

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
    >
      Pay with Razorpay
    </button>
  )
}

export default RazorpayPayment
