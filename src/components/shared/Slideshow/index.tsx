import React, { useState, useEffect } from 'react';
import { Slide } from './Slide';
import { NavigationButton } from './NavigationButton';
import type { SlideData, SlideshowProps } from './types';

export function Slideshow({ slides, variant = 'default' }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentSlide((prev) => {
      if (direction === 'prev') {
        return (prev - 1 + slides.length) % slides.length;
      }
      return (prev + 1) % slides.length;
    });
  };

  return (
    <div className="w-[85%] max-w-5xl mx-auto relative">
      <div className={`relative ${variant === 'default' ? 'h-[200px]' : 'h-[300px]'} overflow-hidden rounded-lg`}>
        {slides.map((slide, index) => (
          <Slide
            key={slide.title}
            {...slide}
            isActive={index === currentSlide}
            variant={variant}
          />
        ))}
      </div>
      
      <NavigationButton direction="prev" onClick={() => navigate('prev')} />
      <NavigationButton direction="next" onClick={() => navigate('next')} />
    </div>
  );
}