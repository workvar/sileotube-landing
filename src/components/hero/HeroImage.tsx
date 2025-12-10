'use client';

import { useState, useEffect, useRef } from 'react';
import { PlayCircle, Bell, LayoutGrid } from 'lucide-react';
import BrowserUI from './BrowserUI';
import FocusModeIndicator from './FocusModeIndicator';

const HeroImage = () => {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const [isFocusedMode, setIsFocusedMode] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    // Clear any existing interval (handles React Strict Mode double-mount)
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Toggle focus mode every 4 seconds
    intervalRef.current = setInterval(() => {
      setIsFocusedMode(prev => !prev);
    }, 4000);
    
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
    };
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
    <div className="relative w-full max-w-6xl animate-slide-up pb-16 md:pb-20 lg:pb-32 z-10" style={{ animationDelay: '0.3s' }}>
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-red/30 via-purple-500/30 to-blue-500/30 blur-2xl opacity-60 animate-pulse-slow -z-10"></div>
      
      <div 
        ref={heroImageRef}
        className="relative rounded-xl p-1 bg-gradient-to-br from-zinc-100 via-white to-zinc-50 shadow-2xl transition-transform duration-100 will-change-transform border border-zinc-200/50"
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer pointer-events-none"></div>
        
        <div className="rounded-lg overflow-hidden bg-white relative aspect-[16/10] border border-zinc-200 shadow-inner group flex flex-col">
          <BrowserUI isFocusedMode={isFocusedMode} />
          <FocusModeIndicator isFocusedMode={isFocusedMode} />
        </div>
      </div>
      
      {/* Enhanced glow behind image */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] blur-[120px] -z-10 transition-all duration-700 ${isFocusedMode ? 'bg-gradient-radial from-blue-400/30 via-blue-300/15 to-transparent' : 'bg-gradient-radial from-brand-red/30 via-red-300/15 to-transparent'}`}></div>
      
      {/* Floating particles around image */}
      <div className="absolute -top-4 -left-4 w-3 h-3 bg-brand-red/40 rounded-full blur-sm animate-float-slow"></div>
      <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-blue-400/40 rounded-full blur-sm animate-float-slow" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 -right-6 w-2.5 h-2.5 bg-purple-400/40 rounded-full blur-sm animate-float-slow" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default HeroImage;

