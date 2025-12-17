'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import BrowserDropdown from './BrowserDropdown';

interface HeroCTAProps {
  isInstallRedirect?: boolean;
}

const HeroCTA: React.FC<HeroCTAProps> = ({ isInstallRedirect = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isInstallRedirect) {
    return (
      <div className="animate-fade-in relative z-30 mb-4 md:mb-8 lg:mb-0" style={{ animationDelay: '0.1s' }}>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="group relative flex items-center justify-center gap-3 px-12 py-8 md:px-16 md:py-10">
            <span className="relative z-10 text-2xl font-bold bg-gradient-to-r from-zinc-900 via-brand-red to-zinc-900 bg-clip-text">
              Thank you for downloading SileoTube
            </span>
          </div>
          <button
            onClick={() => window.open('https://try-sileotube.workvar.com', '_blank')}
            className="group relative flex items-center justify-center gap-3 px-10 py-5 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(255,0,0,0.2)] active:scale-95 overflow-hidden"
          >
            {/* Animated gradient background - same as "attention" text */}
            <span className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-brand-red to-zinc-900 bg-[length:200%_auto] animate-gradient-x rounded-full"></span>
            
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></span>
            
            <span className="relative z-10 text-lg font-semibold flex items-center gap-2">Interactive Demo</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in relative z-30 mb-4 md:mb-8 lg:mb-0" style={{ animationDelay: '0.1s' }} ref={dropdownRef}>
      <div className="flex flex-row items-center justify-center gap-5">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(255,0,0,0.2)] active:scale-95 overflow-hidden"
        >
          {/* Animated background gradient */}
          <span className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-brand-red/10 to-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>

          {/* Shine effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

          <span className="relative z-10 text-lg font-semibold flex items-center gap-2">
            <span>Install SileoTube for Free</span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </span>
        </button>
        <button
          onClick={() => window.open('https://try-sileotube.workvar.com', '_blank')}
          className="group relative flex items-center justify-center gap-3 px-10 py-5 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(255,0,0,0.2)] active:scale-95 overflow-hidden"
        >
          {/* Animated gradient background - same as "attention" text */}
          <span className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-brand-red to-zinc-900 bg-[length:200%_auto] animate-gradient-x rounded-full"></span>
          
          {/* Shine effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></span>
          
          <span className="relative z-10 text-lg font-semibold flex items-center gap-2">Interactive Demo</span>
        </button>
      </div>
      <p className="mt-4 text-xs text-zinc-500 font-medium flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        Available on Chrome, Firefox, and Edge
      </p>

      <BrowserDropdown isOpen={isDropdownOpen} />
    </div>
  );
};

export default HeroCTA;

