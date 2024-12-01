import React, { useState, useEffect } from 'react';

export function HitCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // TODO: Implement actual hit counter logic
    setCount(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <div className="text-[10px] text-black">
      Visitors: {count}
    </div>
  );
}