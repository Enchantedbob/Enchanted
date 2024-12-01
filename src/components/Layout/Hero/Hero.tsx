import React from 'react';
import { HomeContent } from '../../Home/HomeContent';

export function Hero() {
  return (
    <div className="relative" style={{ backgroundColor: 'rgb(55, 182, 255)' }}>
      <div className="flex flex-col">
        <div className="w-full relative mt-12">
          <img 
            src="/images/logo-tight.png" 
            alt="Enchanted Logic Background" 
            className="w-full h-[79vh] object-contain mx-auto"
          />
        </div>
        <div className="mt-8">
          <HomeContent />
        </div>
      </div>
    </div>
  );
}