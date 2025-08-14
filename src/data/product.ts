import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    image: "/api/placeholder/300/300",
    category: "Electronics",
    description: "Comfortable running shoes for daily exercise",
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 79,
    image: "/api/placeholder/300/300",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation",
    rating: { rate: 4.2, count: 89 }
  },
  {
    id: 3,
    title: "Backpack",
    price: 45,
    image: "/api/placeholder/300/300",
    category: "Clothing",
    description: "Durable backpack for travel and work",
    rating: { rate: 4.0, count: 156 }
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    image: "/api/placeholder/300/300",
    category: "Electronics",
    description: "Feature-rich smartwatch with health tracking",
    rating: { rate: 4.3, count: 203 }
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    image: "/api/placeholder/300/300",
    category: "Clothing",
    description: "Stylish sunglasses with UV protection",
    rating: { rate: 4.1, count: 67 }
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 599,
    image: "/api/placeholder/300/300",
    category: "Electronics",
    description: "Professional digital camera for photography",
    rating: { rate: 4.6, count: 92 }
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    image: "/api/placeholder/300/300",
    category: "Clothing",
    description: "Comfortable cotton t-shirt",
    rating: { rate: 3.9, count: 234 }
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    image: "/api/placeholder/300/300",
    category: "Electronics",
    description: "Latest smartphone with advanced features",
    rating: { rate: 4.7, count: 445 }
  }
];

export const categories = ["All", "Electronics", "Clothing", "Home"];