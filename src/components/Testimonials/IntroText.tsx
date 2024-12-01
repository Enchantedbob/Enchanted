import React from 'react';

export function IntroText() {
  return (
    <div 
      className="w-[95%] max-w-6xl mx-auto mb-8 rounded-lg shadow-xl p-4 border border-black" 
      style={{ backgroundColor: 'rgb(55, 182, 255)' }}
    >
      <p className="text-lg text-gray-800 leading-relaxed text-center">
        See what our clients say about their experience with Enchanted Logic.
        <br />
        Real stories of business transformation and success.
      </p>
    </div>
  );
}