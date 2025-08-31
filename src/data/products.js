export const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 1999,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "Electronics",
    rating: 4.5,
    reviews: 234,
    description: "High-quality wireless headphones with noise cancellation and 20 hours battery life.",
    features: ["Noise Cancellation", "20hr Battery", "Bluetooth 5.0"],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 3999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "Electronics",
    rating: 4.3,
    reviews: 167,
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.",
    features: ["Heart Rate Monitor", "GPS", "Water Resistant"],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 3,
    name: "Premium Leather Wallet",
    price: 899,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
    category: "Fashion",
    rating: 4.7,
    reviews: 89,
    description: "Genuine leather wallet with multiple card slots and cash compartments.",
    features: ["Genuine Leather", "10 Card Slots", "RFID Protection"],
    inStock: true,
    fastDelivery: false
  },
  {
    id: 4,
    name: "Ceramic Coffee Mug Set",
    price: 599,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
    category: "Home & Kitchen",
    rating: 4.2,
    reviews: 156,
    description: "Set of 4 beautiful ceramic coffee mugs perfect for your morning brew.",
    features: ["Set of 4", "Dishwasher Safe", "Microwave Safe"],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 5,
    name: "Yoga Mat Premium",
    price: 1299,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    category: "Sports",
    rating: 4.6,
    reviews: 203,
    description: "Extra thick yoga mat with non-slip surface for comfortable workouts.",
    features: ["Non-Slip Surface", "6mm Thick", "Eco-Friendly"],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 1499,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f2e0c5a?w=400",
    category: "Electronics",
    rating: 4.1,
    reviews: 98,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    features: ["Fast Charging", "LED Indicator", "Overheat Protection"],
    inStock: false,
    fastDelivery: false
  }
]

export const categories = [
  { id: 1, name: "Electronics", slug: "electronics" },
  { id: 2, name: "Fashion", slug: "fashion" },
  { id: 3, name: "Home & Kitchen", slug: "home-kitchen" },
  { id: 4, name: "Sports", slug: "sports" },
  { id: 5, name: "Beauty", slug: "beauty" },
  { id: 6, name: "Books", slug: "books" }
]
