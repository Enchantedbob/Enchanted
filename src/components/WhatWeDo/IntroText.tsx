import React from 'react';

export function IntroText() {
  return (
    <div 
      className="w-[95%] max-w-6xl mx-auto mb-8 rounded-lg shadow-xl p-4 border border-black" 
      style={{ backgroundColor: 'rgb(55, 182, 255)' }}
    >
      <p className="text-lg text-gray-800 leading-relaxed text-center">
        Discover how our innovative solutions can transform your business operations.
        <br />
        From AI-powered automation to custom software development, we're here to help you succeed.
      </p>
    </div>
  );
}