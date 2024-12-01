import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Slideshow } from '../components/Testimonials/Slideshow';
import { IntroText } from '../components/Testimonials/IntroText';

export function Testimonials() {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="w-full relative mt-12">
          <img 
            src="/images/logo-tight.png" 
            alt="Enchanted Logic Background" 
            className="w-full h-[79vh] object-contain mx-auto"
          />
        </div>
        <div className="mt-8">
          <IntroText />
        </div>
        <div className="mb-20">
          <Slideshow />
        </div>
      </div>
    </Layout>
  );
}