import React from 'react';

export function Preview() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="w-96 h-96 mx-auto border border-gray-300 rounded-lg shadow-lg">
        <img 
          src="/images/slide-pattern.png" 
          alt="Slide Pattern Preview"
          className="w-full h-full object-cover rounded-lg"
          style={{ 
            imageRendering: 'pixelated',
            transform: 'scale(4)'
          }}
        />
      </div>
      <div className="mt-8 text-center text-gray-700">
        <p>Pattern Preview (4x scale)</p>
      </div>
    </div>
  );
}