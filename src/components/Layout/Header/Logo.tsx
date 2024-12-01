import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 flex items-center justify-center">
        <img src="/logo.png" alt="Enchanted Logic Logo" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}