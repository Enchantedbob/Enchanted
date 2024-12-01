import React, { useState, useEffect } from 'react';
import { Slide } from './Slide';

const slides = [
  {
    title: 'Robert Croley',
    description: 'With over two decades of experience in software development and business automation, Robert leads our team in creating innovative solutions that transform businesses.'
  },
  {
    title: 'Join Our Team',
    description: 'We\'re always looking for talented individuals passionate about technology and innovation. If you\'re excited about creating the future of business automation, we want to hear from you.'
  }
];

export function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-[85%] max-w-5xl mx-auto relative">
      <div className="relative h-[300px] overflow-hidden">
        {slides.map((slide, index) => (
          <Slide
            key={slide.title}
            {...slide}
            isActive={currentSlide === index}
          />
        ))}
      </div>
      
      <button
        onClick={goToPrevSlide}
        className="absolute left-[-40px] top-1/2 -translate-y-1/2 text-black opacity-30 hover:opacity-60 transition-opacity z-50 cursor-pointer"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-black opacity-30 hover:opacity-60 transition-opacity z-50 cursor-pointer"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}