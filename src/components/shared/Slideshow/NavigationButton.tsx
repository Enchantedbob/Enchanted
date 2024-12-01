import React from 'react';
import type { NavigationButtonProps } from './types';

export function NavigationButton({ direction, onClick }: NavigationButtonProps) {
  const isNext = direction === 'next';
  
  return (
    <button
      onClick={onClick}
      className={`absolute ${isNext ? 'right-[-40px]' : 'left-[-40px]'} top-1/2 -translate-y-1/2 text-black opacity-30 hover:opacity-60 transition-opacity`}
      aria-label={`${isNext ? 'Next' : 'Previous'} slide`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d={isNext ? "M8.25 4.5l7.5 7.5-7.5 7.5" : "M15.75 19.5L8.25 12l7.5-7.5"} />
      </svg>
    </button>
  );
}