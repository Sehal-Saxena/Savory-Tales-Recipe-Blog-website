
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, CookingPot, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 wood-bg text-parchment-light shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Site Title */}
          <div className="flex-shrink-0 flex items-center">
            <CookingPot className="h-8 w-8 text-butter" />
            <Link to="/" className="ml-2 font-handwritten text-2xl">
              Savory Tales
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:text-butter transition-colors">
                Home
              </Link>
              <Link to="/categories" className="px-3 py-2 rounded-md text-sm font-medium hover:text-butter transition-colors">
                Categories
              </Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:text-butter transition-colors">
                About
              </Link>
            </div>
          </div>
          
          {/* Search */}
          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="bg-parchment-light text-wood-dark rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-butter"
              />
              <button className="absolute right-3 top-2.5 text-wood">
                <Search size={18} />
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-parchment-light hover:text-butter focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden wood-bg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-wood-dark hover:text-butter"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/categories" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-wood-dark hover:text-butter"
            onClick={() => setIsOpen(false)}
          >
            Categories
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-wood-dark hover:text-butter"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          
          {/* Mobile Search */}
          <div className="mt-4 px-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full bg-parchment-light text-wood-dark rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-butter"
              />
              <button className="absolute right-3 top-2.5 text-wood">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
