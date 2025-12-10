'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { EXTENSION_URL, FIREFOX_URL, EDGE_URL } from '@/constants';
import BrowserDropdown from './BrowserDropdown';

interface HeroCTAProps {
  onOpenModal: () => void;
}

const HeroCTA: React.FC<HeroCTAProps> = ({ onOpenModal }) => {
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

  return (
    <div className="animate-fade-in relative z-30 mb-4 md:mb-0" style={{ animationDelay: '0.1s' }} ref={dropdownRef}>
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
      <p className="mt-4 text-xs text-zinc-500 font-medium flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        Available on Chrome, Firefox, and Edge
      </p>

      <BrowserDropdown isOpen={isDropdownOpen} />
    </div>
  );
};

export default HeroCTA;

