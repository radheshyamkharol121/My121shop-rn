import React from 'react'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Account</h2>
            <nav className="space-y-2">
              <button className="w-full text-left px-3 py-2 bg-primary-100 text-primary-600 rounded-lg font-medium">
                Profile
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg">
                Orders
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg">
                Addresses
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg">
                Payment Methods
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg">
                Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            
            {user ? (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {user.email ? user.email[0].toUpperCase() : 'U'}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{user.email}</h3>
                    <p className="text-gray-600">Member since 2024</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user.email || ''}
                    disabled
                    className="input-field bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="input-field"
                    placeholder="Enter phone number"
                  />
                </div>

                <button className="btn-primary">
                  Save Changes
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">Please log in to view your profile</p>
                <button className="btn-primary">
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
