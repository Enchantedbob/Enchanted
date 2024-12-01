import React from 'react';
import { Layout } from '../components/Layout/Layout';

export function Blog() {
  return (
    <Layout showHero={false}>
      <div className="relative">
        <div className="w-full">
          <img 
            src="/logo-art.png" 
            alt="Enchanted Logic Background" 
            className="w-full h-[80vh] object-contain mx-auto"
          />
        </div>
        <div className="w-[90%] max-w-6xl mx-auto mb-20 bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Blog</h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            Coming soon! Check back for insightful articles about business automation, AI integration, and digital transformation.
          </p>
        </div>
      </div>
    </Layout>
  );
}