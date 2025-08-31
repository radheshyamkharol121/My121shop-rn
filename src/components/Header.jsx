import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { user } = useAuth()
  const { getCartCount } = useCart()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const cartCount = getCartCount()

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">My121Shop</span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </form>

          {/* Navigation - ADMIN LINK ALWAYS VISIBLE */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Admin link always visible */}
            <Link to="/admin" className="text-gray-700 hover:text-primary-600">
              Admin
            </Link>
            
            {user ? (
              <Link to="/profile" className="flex items-center space-x-1 text-gray-700 hover:text-primary-600">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary-600">Login</Link>
                <Link to="/register" className="btn-primary">Sign Up</Link>
              </>
            )}
            
            <Link to="/cart" className="relative flex items-center space-x-1 text-gray-700 hover:text-primary-600">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <span>Cart</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <form onSubmit={handleSearch} className="px-4 pb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
            <div className="space-y-2 px-4">
              {/* Admin link always visible in mobile too */}
              <Link to="/admin" className="block py-2 text-gray-700">Admin</Link>
              
              {user ? (
                <Link to="/profile" className="block py-2 text-gray-700">Profile</Link>
              ) : (
                <>
                  <Link to="/login" className="block py-2 text-gray-700">Login</Link>
                  <Link to="/register" className="block py-2 text-primary-600">Sign Up</Link>
                </>
              )}
              <Link to="/cart" className="block py-2 text-gray-700">Cart ({cartCount})</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
