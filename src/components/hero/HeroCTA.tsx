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
    <div className="animate-fade-in relative z-30" style={{ animationDelay: '0.1s' }} ref={dropdownRef}>
      <button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-zinc-900 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] active:scale-95"
      >
        <span className="text-lg font-medium">Install SileoTube for Free</span>
        <ChevronDown 
          size={20} 
          className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <p className="mt-4 text-xs text-zinc-400 font-medium">
        Available on Chrome, Firefox, and Edge
      </p>

      <BrowserDropdown isOpen={isDropdownOpen} />
    </div>
  );
};

export default HeroCTA;

