'use client';

import { useState, useEffect } from 'react';

interface ToggleItemProps {
  label: string;
  delay: number;
}

const ToggleItem: React.FC<ToggleItemProps> = ({ label, delay }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setChecked(true);
    }, delay);

    const interval = setInterval(() => {
      setChecked(prev => !prev);
    }, 5000 + delay / 2);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [delay]);

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
      <span className="font-medium text-zinc-700">{label}</span>
      <div 
        className={`w-12 h-7 rounded-full p-1 transition-colors duration-300 cursor-pointer ${checked ? 'bg-zinc-900' : 'bg-zinc-200'}`}
        onClick={() => setChecked(!checked)}
      >
        <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${checked ? 'translate-x-5' : 'translate-x-0'}`}></div>
      </div>
    </div>
  );
};

export default ToggleItem;

