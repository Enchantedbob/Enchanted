import { ReactNode } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden relative" style={{ backgroundColor: 'rgb(55, 182, 255)' }}>
      <Header />
      <div className="flex-grow container mx-auto px-4 relative z-0">
        {children}
      </div>
      <Footer />
    </div>
  );
}