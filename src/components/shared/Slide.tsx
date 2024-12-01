import React from 'react';

interface SlideProps {
  title: string;
  description: string;
  position?: 'current' | 'prev' | 'next';
  isActive?: boolean;
  variant?: 'default' | 'testimonial' | 'about';
}

export function Slide({ title, description, position, isActive, variant = 'default' }: SlideProps) {
  const getPositionClasses = () => {
    if (position) {
      switch (position) {
        case 'current': return 'translate-x-0 opacity-100 z-10';
        case 'prev': return '-translate-x-full opacity-0 z-0';
        case 'next': return 'translate-x-full opacity-0 z-0';
        default: return 'translate-x-full opacity-0 z-0';
      }
    }
    return isActive ? 'translate-x-0 opacity-100 z-10' : 'translate-x-full opacity-0 z-0';
  };

  const heights = {
    default: 'h-[200px]',
    testimonial: 'h-[300px]',
    about: 'h-[300px]'
  };

  return (
    <div 
      className={`absolute inset-0 transition-all duration-500 transform ${getPositionClasses()}`}
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