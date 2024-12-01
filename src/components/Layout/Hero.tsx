import React from 'react';

export function Hero() {
  return (
    <div className="h-[60vh] bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          {/* Placeholder for logo - replace with your actual logo */}
          <div className="w-48 h-48 bg-gray-300 mx-auto mb-6 rounded-full flex items-center justify-center">
            <span className="text-4xl text-gray-600">LOGO</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Your Brand Name</h1>
        <p className="text-xl text-gray-600">Your tagline goes here</p>
      </div>
    </div>
  );
}