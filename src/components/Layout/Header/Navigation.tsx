import React from 'react';
import { useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  
  const handleContactClick = () => {
    window.location.href = 'mailto:contact@enchanted-logic.com';
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex-1">
        <nav className="flex justify-center items-center space-x-8">
          <a 
            href="/" 
            className={`text-sm transition-colors ${isActive('/') ? 'text-white' : 'text-black hover:text-gray-700'}`}
          >
            Home
          </a>
          <a 
            href="/blog" 
            className={`text-sm transition-colors ${isActive('/blog') ? 'text-white' : 'text-black hover:text-gray-700'}`}
          >
            Blog
          </a>
          <a 
            href="/what-we-do" 
            className={`text-sm transition-colors ${isActive('/what-we-do') ? 'text-white' : 'text-black hover:text-gray-700'}`}
          >
            What We Do
          </a>
          <a 
            href="/testimonials" 
            className={`text-sm transition-colors ${isActive('/testimonials') ? 'text-white' : 'text-black hover:text-gray-700'}`}
          >
            Testimonials
          </a>
          <a 
            href="/about" 
            className={`text-sm transition-colors ${isActive('/about') ? 'text-white' : 'text-black hover:text-gray-700'}`}
          >
            About Us
          </a>
        </nav>
      </div>
      <div className="ml-8">
        <button
          onClick={handleContactClick}
          className="text-sm text-black hover:text-gray-700 transition-colors"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}