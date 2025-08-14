import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Filters */}
          <div>
            <h3 className="font-semibold mb-4">Filters</h3>
            <ul className="space-y-2 text-gray-300">
              <li>All</li>
              <li>Electronics</li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          © 2024 SmartShop
        </div>
      </div>
    </footer>
  );
};

export default Footer;