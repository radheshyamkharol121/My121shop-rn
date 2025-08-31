import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ShoppingBag, Mail } from 'lucide-react'

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Order Placed Successfully!
        </h1>
        
        <p className="text-gray-600 mb-4">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <Mail className="h-4 w-4 mr-2" />
            <span>Confirmation email sent to your email address</span>
          </div>
          
          <div className="flex items-center justify-center text-sm text-gray-600">
            <ShoppingBag className="h-4 w-4 mr-2" />
            <span>Order will be delivered within 3-5 business days</span>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            to="/products"
            className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 block"
          >
            Continue Shopping
          </Link>
          
          <Link
            to="/profile"
            className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 block"
          >
            View Order History
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess
