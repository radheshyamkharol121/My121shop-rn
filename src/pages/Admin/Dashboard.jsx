import React from 'react'
import { Link } from 'react-router-dom'
import { Package, ShoppingCart, Users, BarChart3 } from 'lucide-react'

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Products', value: '25', icon: Package, color: 'text-blue-600' },
    { label: 'Total Orders', value: '12', icon: ShoppingCart, color: 'text-green-600' },
    { label: 'Total Users', value: '8', icon: Users, color: 'text-purple-600' },
    { label: 'Total Sales', value: '₹24,999', icon: BarChart3, color: 'text-orange-600' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome to your administration panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="p-3 bg-gray-100 rounded-full">
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/admin/products"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <Package className="h-6 w-6 text-blue-600" />
            <span>Manage Products</span>
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
          >
            <ShoppingCart className="h-6 w-6 text-green-600" />
            <span>Manage Orders</span>
          </Link>
          <Link
            to="/admin/users"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
          >
            <Users className="h-6 w-6 text-purple-600" />
            <span>Manage Users</span>
          </Link>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Getting Started</h3>
        <p className="text-blue-700">
          Welcome to your admin dashboard! Here you can manage products, orders, and users.
          Start by adding your first product or exploring the different management sections.
        </p>
      </div>
    </div>
  )
}

export default AdminDashboard
