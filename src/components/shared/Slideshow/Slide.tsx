import React from 'react';
import type { SlideProps } from './types';

export function Slide({ title, description, isActive, variant = 'default' }: SlideProps) {
  const heights = {
    default: 'h-[200px]',
    testimonial: 'h-[300px]',
    about: 'h-[300px]'
  };

  return (
    <div 
      className={`absolute inset-0 transition-all duration-500 transform ${
        isActive ? 'translate-x-0 opacity-100 z-10' : 'translate-x-full opacity-0 z-0'
      }`}
    >
      <div 
        className={`w-full ${heights[variant]} rounded-lg shadow-lg p-8 flex flex-col justify-center`}
        style={{ 
          backgroundImage: 'url(/images/slide-pattern.png)',
          backgroundSize: '40px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">{title}</h2>
        <p className="text-base text-gray-800 bg-white/80 p-4 rounded-lg" style={{ lineHeight: '1.4', textIndent: '0' }}>
          {description}
        </p>
      </div>
    </div>
  );
}