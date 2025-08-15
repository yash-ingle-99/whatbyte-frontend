'use client';

import React from 'react';
import { categories } from '../data/product';
import { Filters } from '../data/product';

interface SidebarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, onFiltersChange }) => {
  const handleCategoryChange = (category: string) => {
    onFiltersChange({
      ...filters,
      category: category
    });
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    onFiltersChange({
      ...filters,
      priceRange: range
    });
  };

  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={filters.category === category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-4 h-4 text-blue-600 mr-3"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
        
        <div className="mt-4 space-y-2 text-sm">
          <div className="ml-7">Electronics</div>
          <div className="ml-7">Clothing</div>
          <div className="ml-7">Home</div>
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Price</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceRangeChange([filters.priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm">
            <span>0</span>
            <span>1000</span>
          </div>
        </div>
      </div>

      {/* Additional Category Filter */}
      <div>
        <h3 className="font-semibold mb-4">Category</h3>
        <div className="space-y-3">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="category2"
              checked={filters.category === 'All'}
              onChange={() => handleCategoryChange('All')}
              className="w-4 h-4 text-blue-600 mr-3"
            />
            <span className="text-sm">All</span>
          </label>
          
          <div className="ml-7 space-y-2 text-sm">
            <div>Electronics</div>
            <div>Clothing</div>
            <div>Home</div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-2">Price</h4>
          <div className="text-sm">
            <div>${filters.priceRange[0]} - ${filters.priceRange[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;