import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { HomeContent } from '../components/Home/HomeContent';

export function Home() {
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
          <HomeContent />
        </div>
      </div>
    </Layout>
  );
}