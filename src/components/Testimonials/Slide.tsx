import React from 'react';

interface SlideProps {
  title: string;
  description: string;
  isActive: boolean;
}

export function Slide({ title, description, isActive }: SlideProps) {
  return (
    <div 
      className={`absolute inset-0 transition-all duration-500 transform ${
        isActive ? 'translate-x-0 opacity-100 z-10' : 'translate-x-full opacity-0 z-0'
      }`}
    >
      <div 
        className="w-full h-full rounded-lg shadow-lg p-8 flex flex-col justify-center bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm"
        style={{ 
          backgroundImage: 'url(/images/slide-pattern.png)',
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay'
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">{title}</h2>
        <p className="text-lg text-gray-800 bg-white/80 p-4 rounded-lg" style={{ lineHeight: '1.4', textIndent: '0' }}>
          {description}
        </p>
      </div>
    </div>
  );
}