import React from 'react';
import { useLocation } from 'react-router-dom';
import { HitCounter } from '../shared/HitCounter';
import { ActionButtons } from '../shared/ActionButtons';

export function Footer() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 w-full bg-[rgb(55,182,255)] py-2 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <HitCounter />
        <nav className="flex justify-center items-center space-x-8 text-[10px]">
          <a 
            href="/" 
            className={`transition-colors ${isActive('/') ? 'text-white' : 'text-black hover:text-gray-700'}`}
          >
            Home
          </a>
          <a 
            href="/blog" 
            className={`transition-colors ${isActive('/blog') ? 'text-white' : 'text-black hover:text-gray-700'}`}
          >
            Blog
          </a>
          <a 
            href="/what-we-do" 
            className={`transition-colors ${isActive('/what-we-do') ? 'text-white' : 'text-black hover:text-gray-700'}`}
          >
            What We Do
          </a>
          <a 
            href="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-white' : 'text-black hover:text-gray-700'}`}
          >
            About Us
          </a>
          <a 
            href="/pricing" 
            className={`transition-colors ${isActive('/pricing') ? 'text-white' : 'text-black hover:text-gray-700'}`}
          >
            Pricing
          </a>
          <a 
            href="/remove-me" 
            className="text-black hover:text-gray-700 transition-colors"
          >
            Remove Me
          </a>
        </nav>
        <ActionButtons />
      </div>
    </div>
  );
}