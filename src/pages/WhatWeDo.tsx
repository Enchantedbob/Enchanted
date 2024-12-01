import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Slideshow } from '../components/shared/Slideshow';
import { WHAT_WE_DO_SLIDES } from '../constants/slides';

export function WhatWeDo() {
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
        <div className="w-[95%] max-w-6xl mx-auto mt-8 mb-8 rounded-lg shadow-xl p-4 border border-black" style={{ backgroundColor: 'rgb(55, 182, 255)' }}>
          <p className="text-lg text-gray-800 leading-relaxed text-center">
            Discover how our innovative solutions can transform your business operations.
            <br />
            From AI-powered automation to custom software development, we're here to help you succeed.
          </p>
        </div>
        <div className="mb-20">
          <Slideshow slides={WHAT_WE_DO_SLIDES} />
        </div>
      </div>
    </Layout>
  );
}