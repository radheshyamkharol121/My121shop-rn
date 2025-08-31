import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Star, Truck, Shield, ArrowLeft, Heart, Share2 } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice, formatRating, formatReviewCount } from '../utils/format'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <button 
          onClick={() => navigate('/products')}
          className="btn-primary mt-4"
        >
          Back to Products
        </button>
      </div>
    )
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
  const images = [product.image, product.image, product.image] // Simulating multiple images

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const handleBuyNow = () => {
    addToCart(product, quantity)
    navigate('/cart')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-lg border-2 ${
                  selectedImage === index ? 'border-primary-600' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium text-gray-900">
                  {formatRating(product.rating)}
                </span>
              </div>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-600">
                {formatReviewCount(product.reviews)} reviews
              </span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-600">{product.category}</span>
            </div>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>
            <p className="text-green-600 font-medium">Inclusive of all taxes</p>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Delivery Info */}
          <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center text-green-600">
              <Truck className="h-5 w-5 mr-2" />
              <span>Free delivery on orders above ₹499</span>
            </div>
            <div className="flex items-center text-blue-600">
              <Shield className="h-5 w-5 mr-2" />
              <span>1 Year Warranty</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-2">
            <label className="font-semibold text-gray-900">Quantity:</label>
            <div className="flex items-center space-x-4">
              <select
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <span className="text-gray-600">({product.inStock ? 'In Stock' : 'Out of Stock'})</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 btn-secondary disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="flex-1 btn-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Buy Now
            </button>
          </div>

          {/* Additional Actions */}
          <div className="flex space-x-4">
            <button className="flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 py-2 px-4 border border-gray-300 rounded-lg">
              <Heart className="h-5 w-5" />
              <span>Wishlist</span>
            </button>
            <button className="flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 py-2 px-4 border border-gray-300 rounded-lg">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
