'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  const { totalItems } = useCart();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Cart and Profile */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <div className="flex items-center bg-blue-700 px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">
                <ShoppingCart className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
            
            <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;