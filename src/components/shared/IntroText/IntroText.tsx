import React from 'react';

interface IntroTextProps {
  title: string;
  subtitle: string;
}

export function IntroText({ title, subtitle }: IntroTextProps) {
  return (
    <div 
      className="w-[95%] max-w-6xl mx-auto mb-8 rounded-lg shadow-xl p-4 border border-black" 
      style={{ backgroundColor: 'rgb(55, 182, 255)' }}
    >
      <p className="text-lg text-gray-800 leading-relaxed text-center">
        {title}
        <br />
        {subtitle}
      </p>
    </div>
  );
}