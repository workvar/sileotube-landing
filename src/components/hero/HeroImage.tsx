'use client';

import { useState, useEffect, useRef } from 'react';
import { PlayCircle, Bell, LayoutGrid } from 'lucide-react';
import BrowserUI from './BrowserUI';
import FocusModeIndicator from './FocusModeIndicator';

const HeroImage = () => {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const [isFocusedMode, setIsFocusedMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFocusedMode(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let requestRef: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX - innerWidth / 2) / 80;
      targetY = (e.clientY - innerHeight / 2) / 80;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `perspective(1000px) rotateX(${-currentY * 0.5}deg) rotateY(${currentX * 0.5}deg)`;
      }
      requestRef = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <div className="relative w-full max-w-6xl animate-slide-up pb-32 -mt-10 md:-mt-20 z-10" style={{ animationDelay: '0.3s' }}>
      <div 
        ref={heroImageRef}
        className="rounded-xl p-1 bg-gradient-to-b from-zinc-100 to-white shadow-2xl transition-transform duration-100 will-change-transform"
      >
        <div className="rounded-lg overflow-hidden bg-white relative aspect-[16/10] border border-zinc-200 shadow-inner group">
          <BrowserUI isFocusedMode={isFocusedMode} />
          <FocusModeIndicator isFocusedMode={isFocusedMode} />
        </div>
      </div>
      {/* Glow behind image */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-zinc-200/30 opacity-50 blur-[100px] -z-10 transition-colors duration-700 ${isFocusedMode ? 'bg-blue-200/20' : 'bg-red-200/20'}`}></div>
    </div>
  );
};

export default HeroImage;

