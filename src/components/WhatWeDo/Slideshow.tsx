import React, { useState, useEffect } from 'react';
import { Slide } from './Slide';

const slides = [
  {
    title: 'B2B Lead Generation',
    description: 'AI-powered lead generation that connects you with ideal business customers.'
  },
  {
    title: 'Custom Chatbot',
    description: 'Intelligent chatbots providing 24/7 customer support and lead qualification.'
  },
  {
    title: 'Content Automation',
    description: 'Automated blog posts, newsletters, and social media content that keeps your audience engaged.'
  },
  {
    title: 'Smart Onboarding',
    description: 'Streamlined client and employee onboarding that saves time and ensures consistency.'
  },
  {
    title: 'Process Automation',
    description: 'Custom automation solutions that eliminate repetitive tasks and optimize operations.'
  },
  {
    title: 'Your Solution',
    description: 'Discover how our tailored solutions can address your specific business challenges.'
  }
];

export function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('next');
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevSlide = () => {
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const getSlidePosition = (index: number) => {
    if (index === currentSlide) return 'current';
    if (direction === 'next') {
      if (index === (currentSlide + 1) % slides.length) return 'next';
      if (index === (currentSlide - 1 + slides.length) % slides.length) return 'prev';
    } else {
      if (index === (currentSlide - 1 + slides.length) % slides.length) return 'prev';
      if (index === (currentSlide + 1) % slides.length) return 'next';
    }
    return 'next';
  };

  return (
    <div className="w-[85%] max-w-5xl mx-auto relative">
      <div className="relative overflow-hidden rounded-lg shadow-lg p-8 h-[200px]" style={{ backgroundColor: 'rgb(55, 182, 255)' }}>
        {slides.map((slide, index) => (
          <Slide
            key={slide.title}
            {...slide}
            position={getSlidePosition(index)}
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