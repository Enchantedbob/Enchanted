import React from 'react';

export function HomeContent() {
  return (
    <div className="w-[90%] max-w-6xl mx-auto mb-20 bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Welcome to Enchanted Logic
      </h1>
      <p className="text-base text-gray-800 leading-relaxed px-2" style={{ lineHeight: '1.4', textIndent: '0' }}>
        Where innovation meets efficiency. We specialize in transforming businesses through cutting-edge automation solutions and custom software development. Our expertise in AI integration and process optimization helps companies streamline their operations and achieve unprecedented growth.
      </p>
    </div>
  );
}