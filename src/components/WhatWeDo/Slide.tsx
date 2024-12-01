import React from 'react';

interface SlideProps {
  title: string;
  description: string;
  position: 'current' | 'prev' | 'next';
}

export function Slide({ title, description, position }: SlideProps) {
  const getPositionClasses = () => {
    switch (position) {
      case 'current':
        return 'translate-x-0 opacity-100 z-10';
      case 'prev':
        return '-translate-x-full opacity-0 z-0';
      case 'next':
        return 'translate-x-full opacity-0 z-0';
      default:
        return 'translate-x-full opacity-0 z-0';
    }
  };

  return (
    <div 
      className={`absolute inset-0 transition-all duration-500 transform ${getPositionClasses()}`}
    >
      <div 
        className="w-full h-full rounded-lg shadow-lg p-8 flex flex-col justify-center"
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