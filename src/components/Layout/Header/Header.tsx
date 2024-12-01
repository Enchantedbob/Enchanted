import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-12" style={{ backgroundColor: 'rgb(55, 182, 255)' }}>
      <div className="container mx-auto px-4">
        <div className="h-12 flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}