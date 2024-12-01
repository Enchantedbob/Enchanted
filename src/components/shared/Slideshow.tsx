import React, { useState, useEffect } from 'react';

interface SlideData {
  title: string;
  description: string;
}

interface SlideshowProps {
  slides: SlideData[];
  variant?: 'default' | 'testimonial' | 'about';
}

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
          <div
            key={slide.title}
            className={`absolute inset-0 transition-all duration-500 transform ${
              index === currentSlide ? 'translate-x-0 opacity-100 z-10' : 'translate-x-full opacity-0 z-0'
            }`}
          >
            <div 
              className="w-full h-full p-8 flex flex-col justify-center bg-white/95 shadow-lg"
              style={{ backgroundColor: 'rgb(55, 182, 255)' }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">{slide.title}</h2>
              <p className="text-base text-gray-800 bg-white/80 p-4 rounded-lg" style={{ lineHeight: '1.4' }}>
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={() => navigate('prev')}
        className="absolute left-[-40px] top-1/2 -translate-y-1/2 text-black opacity-30 hover:opacity-60 transition-opacity"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={() => navigate('next')}
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-black opacity-30 hover:opacity-60 transition-opacity"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}