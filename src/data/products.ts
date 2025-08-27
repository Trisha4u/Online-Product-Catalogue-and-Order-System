import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'all', name: 'All Products', count: 24 },
  { id: 'electronics', name: 'Electronics', count: 8 },
  { id: 'clothing', name: 'Clothing', count: 6 },
  { id: 'home', name: 'Home & Garden', count: 5 },
  { id: 'sports', name: 'Sports & Outdoor', count: 5 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Canceling Headphones',
    description: 'Premium over-ear headphones with industry-leading noise cancellation and 30-hour battery life.',
    price: 299.99,
    originalPrice: 349.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    features: ['Active Noise Cancellation', '30-hour battery', 'Quick charge', 'Premium materials'],
    specifications: {
      'Battery Life': '30 hours',
      'Charging Time': '3 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0, 3.5mm jack'
    }
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life.',
    price: 249.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    rating: 4.6,
    reviewCount: 892,
    inStock: true,
    features: ['Heart rate monitoring', 'GPS tracking', '7-day battery', 'Water resistant'],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart rate, GPS, Accelerometer'
    }
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Soft, comfortable t-shirt made from 100% organic cotton with a relaxed fit.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'clothing',
    rating: 4.4,
    reviewCount: 324,
    inStock: true,
    features: ['100% Organic Cotton', 'Pre-shrunk', 'Tagless', 'Available in multiple colors'],
    specifications: {
      'Material': '100% Organic Cotton',
      'Fit': 'Relaxed',
      'Care': 'Machine washable',
      'Origin': 'Ethically sourced'
    }
  },
  {
    id: '4',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.pexels.com/photos/4316313/pexels-photo-4316313.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4316313/pexels-photo-4316313.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    rating: 4.3,
    reviewCount: 156,
    inStock: true,
    features: ['Fast charging', 'LED indicator', 'Non-slip surface', 'Universal compatibility'],
    specifications: {
      'Charging Speed': '10W fast charging',
      'Compatibility': 'Qi-enabled devices',
      'Input': 'USB-C',
      'Dimensions': '100mm diameter'
    }
  },
  {
    id: '5',
    name: 'Ceramic Plant Pot Set',
    description: 'Beautiful set of 3 ceramic plant pots with drainage holes and saucers.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'home',
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    features: ['Drainage holes', 'Matching saucers', 'Food-safe ceramic', 'Multiple sizes'],
    specifications: {
      'Material': 'High-quality ceramic',
      'Sizes': 'Small, Medium, Large',
      'Drainage': 'Yes, with saucers',
      'Finish': 'Matte glaze'
    }
  },
  {
    id: '6',
    name: 'Premium Yoga Mat',
    description: 'Non-slip yoga mat with superior grip and cushioning for all types of yoga practice.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    rating: 4.9,
    reviewCount: 445,
    inStock: true,
    features: ['Non-slip surface', 'Extra cushioning', 'Eco-friendly material', 'Carrying strap'],
    specifications: {
      'Thickness': '6mm',
      'Material': 'TPE (eco-friendly)',
      'Dimensions': '183cm x 61cm',
      'Weight': '1.2kg'
    }
  }
];